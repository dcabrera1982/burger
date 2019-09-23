var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "yfstwlwntenb65b1",
  password: "ksiqj89icsqk0wp9",
  database: "f2d20mdqfg1flzwh"
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
