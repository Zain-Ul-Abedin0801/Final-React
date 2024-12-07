const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root', 
  database: 'enchanted', 
});

module.exports = pool.promise();
