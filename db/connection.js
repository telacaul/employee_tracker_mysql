const util = require('util');
const mysql = require('mysql2');

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'reMbaT22',
    database: 'employees'
  },
  console.log('Connected to the employee database')
);

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;