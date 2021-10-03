let mysql = require("mysql");

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'database_acaps',
    insecureAuth : true
  });
  
  connection.connect();
  
  module.exports = connection;