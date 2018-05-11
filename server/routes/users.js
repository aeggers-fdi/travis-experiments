var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');




  var con = mysql.createConnection({
    host: "localhost",
    user: "test_user",
    password: "test_password"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  con.query("SELECT * FROM zip_codes.zipcode where Zipcode='80634' and LocationType='PRIMARY';", function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });

});

module.exports = router;
