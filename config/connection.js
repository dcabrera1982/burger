var mysql = require("mysql");
var connection;




//   connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

connection = mysql.createConnection({
  host: "tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xe90fa4ufomlmp91",
  password: "qnki7cmjcseuh8q8",
  database: "hxgmfrhaxdv0392d"
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
