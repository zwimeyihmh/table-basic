var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var Controller = require('../controller/main.js');
/* GET home page. */
var controller = new Controller();
router.get('/', controller.getManage);

var Sort = require('../model/sort.js');
router.get('/score', function(req, res) {
  var sort = new Sort();
  var order = req.query.order;
  var alls = req.query.alls;
  var subject = req.query.subject;
  var result = sort.order(alls,subject,order);
  res.send(result);

});

var connection;
router.all('*', function(req, res, next) {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test'
  });
  connection.connect(function(err) {
    if (err) throw err;
    next();
  });
});



router.delete('/del', function(req, res) {
  var id = req.body.id;
  var result;
  var deleteS = "delete from scores where student_id=" + id + ";";
  connection.query(deleteS, function(err, rows) {
    if (err) throw err;
    if (rows.affectedRows > 0) {
      result = {
        status: 200,
        message: "sucess",
        data: ''
      };
    } else {
      result = {
        status: 404,
        message: "not found",
        data: ''
      };
    }
    res.send(result);
    connection.end();
  });

});

router.post("/add", function(req, res) {
  var add = req.body;
  console.log(req.body);
  var insertStudent = "insert into students values(null,'" + add.name + "');";
  connection.query(insertStudent, function(err, rows) {
    if (err) throw err;
    var result;
    if (rows.affectedRows > 0) {
      var student_id = rows.insertId;
      var insertScore = "insert into scores values(null," + student_id + "," + 1 + "," + add.chinese + "),(null," + student_id + "," + 2 + "," + add.math + "),(null," + student_id + "," + 3 + "," + add.english + ");";
      connection.query(insertScore, function(err, rows) {
        if (err) throw err;
      });
      result = {
        status: 200,
        message: "sucess",
        data:student_id
      };
    } else {
      result = {
        status: 404,
        message: "not found",
        data: ''
      };
    }
    res.send(result);
    connection.end();
  });


});

module.exports = router;
