use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 180000, 1),
    ('Salesperson', 90000, 1),
    ('Lead Engineer', 220000, 2),
    ('Software Engineer', 180000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Frank', 'Bensen', 1, NULL),
    ('Ash', 'Ketchum', 2, 1),
    ('Lionel', 'Messi', 3, NULL),
    ('Tina', 'Fey', 4, 3),
    ('John', 'Doe', 5, NULL),
    ('Leslie', 'Knope', 6, 5),
    ('Micheal', 'Scott', 7, NULL),
    ('Holly', 'Allen', 8, 7);