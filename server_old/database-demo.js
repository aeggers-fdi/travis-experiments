var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "test_user",
  password: "test_password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
