var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tuesday_db'
});
 
connection.connect();
 
connection.query('SELECT * from chicken', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();
