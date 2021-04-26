# Employee Tracker

## Description
This Node.js, Inquirer and MySQL application is functional through the command line, assisting the user to keep track of a company's employee directory.  

## Screenshot / Video of Functionality
![Demo Screenshot](./images/preview.jpg)
[Click here to view video of functionality!](https://drive.google.com/file/d/1NHP6LkTVuhgbFCaLa5g8UCzBjsFPfvac/view)

## Challenge Requirements
### User Story
* AS A buisness owner
* I WANT to be able to view and manage the departments, roles, and employees in my company
* SO THAT I can organize and plan my business

### Acceptance Criteria
* GIVEN a command-line application that accepts user input
* WHEN I start the application
* THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
* WHEN I choose to view all departments
* THEN I am presented with a formatted table showing department names and department ids
* WHEN I choose to view all roles
* THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
* WHEN I choose to view all employees
* THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
* WHEN I choose to add a department
* THEN I am prompted to enter the name of the department and that department is added to the database
* WHEN I choose to add a role
* THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
* WHEN I choose to add an employee
* THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
* WHEN I choose to update an employee role
* THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Installation
The user will need to copy the schema and seed files into the root connection and enter their specific authentication details in the connection.js file. In order to run the application, the user needs to install the necessary dependencies via the command line (npm install). 

Once all depedencies are installed, the application can be initiated from the terminal and user is within the correct folder, using the command "node tracker.js".