const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

runSearch();


async function runSearch() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View Employees",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "View Departments",
          value: "VIEW_DEPARTMENTS"
        },
        {
          name: "View Roles",
          value: "VIEW_ROLES"
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE"
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT"
        },
        {
          name: "Add Role",
          value: "ADD_ROLE"
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]);


  switch (choice) {
    case "VIEW_EMPLOYEES":
      return viewEmployees();

    case "VIEW_DEPARTMENTS":
      return viewDepartments();  

    case "VIEW_ROLES":
    return viewRoles(); 

    case "ADD_EMPLOYEE":
      return addEmployee();

    case "ADD_DEPARTMENT":
    return addDepartment();

    case "ADD_ROLE":
      return addRole(); 

    case "UPDATE_EMPLOYEE_ROLE":
      return updateRole();   

    case "QUIT":
      return quit();
      
  }
}

async function viewEmployees() {
  const employees = await db.findEmployees();

  console.table(employees);

  runSearch();
}

async function viewDepartments() {
  const departments = await db.findDepartments();


  console.table(departments);

  runSearch();
}


async function viewRoles() {
  const roles = await db.findRoles();


  console.table(roles);

  runSearch();
}



async function addDepartment() {
  const department = await prompt([
    {
      name: "name",
      message: "name of the department?"
    }
  ]);



  await db.createDepartment(department);

  console.log(`Added ${department.name} to the database`);

  runSearch();
}


async function addEmployee() {
  const roles = await db.findRoles();
  const employees = await db.findEmployees();

  const employee = await prompt([
    {
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      name: "last_name",
      message: "What is the employee's last name?"
    }
  ]);

  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { roleId } = await prompt({
    type: "list",
    name: "roleId",
    message: "What is the role?",
    choices: roleChoices
  });

  employee.role_id = roleId;

  const managerChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));
  managerChoices.unshift({ name: "None", value: null });

  const { managerId } = await prompt({
    type: "list",
    name: "managerId",
    message: "Who is the employee's manager?",
    choices: managerChoices
  });

  employee.manager_id = managerId;

  await db.createEmployee(employee);

  console.log(
    `Added ${employee.first_name} ${employee.last_name} to the database`
  );

  runSearch();
}

async function addRole() {
  const departments = await db.findDepartments();

  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id
  }));

  const role = await prompt([
    {
      name: "title",
      message: "name of the role?"
    },
    {
      name: "salary",
      message: "salary?"
    },
    {
      type: "list",
      name: "department_id",
      message: "Which department?",
      choices: departmentChoices
    }
  ]);

  await db.createRole(role);

  console.log(`Added ${role.title} to the database`);

  runSearch();
}



async function updateRole() {
  const employees = await db.findEmployees();

  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));

  const { employeeId } = await prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee?",
      choices: employeeChoices
    }
  ]);

  const roles = await db.findRoles();

  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { roleId } = await prompt([
    {
      type: "list",
      name: "roleId",
      message: "Which role?",
      choices: roleChoices
    }
  ]);

  await db.updateRole(employeeId, roleId);

  console.log("Updated role");

  runSearch();
}


function quit() {
  console.log("Thank you. You have finished with the application. Please enter control c to terminate the application")
}