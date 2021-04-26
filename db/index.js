const connection = require("./connection");

class DB {

  constructor(connection) {
    this.connection = connection;
  }

  findEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  findDepartments() {
    return this.connection.query(
      "SELECT * FROM employees.department;"
    );
  }

  findRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }
  
  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }

  createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }

  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }

  updateRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  removeRole(roleId) {
    return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
  }

}

module.exports = new DB(connection);