var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var Controller = require('../controller/main.js');
/* GET home page. */
var controller = new Controller();
router.get('/', controller.getManage);
// router.post('/');

// router.get("/del",function(req,res){
//   var mysql = require('mysql');
//   var name = req.query.nm;
//   console.log(name);
//   var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '123456',
//     database: 'test'
//   });
//   connection.connect();
//   // console.log('del');
//   // console.log(name);
//   var deleteS = "delete from basic where name='"+name+"';";
//   connection.query(deleteS,function(err,rows){
//     if(err) throw err;
//     // res.send(rows);
//     // res.render('index');
//     //res.send("deleted");
//     connection.end();
//   });
//
// });
var connection ;
router.all('*', function(req,res,next) {
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

router.get('/del', function(req, res) {
  var id = req.query.id;

  var deleteS = "delete from scores where student_id=" + id + ";";
  connection.query(deleteS, function(err, rows) {
    if (err) throw err;
    connection.end();
  });

});

router.get("/add", function(req, res) {
  var add = req.query.added;
  var insertStudent = "insert into students values(null,'" + add.name + "');";
  connection.query(insertStudent, function(err, rows) {
    if (err) throw err;
    if (rows.affectedRows > 0) {
      var student_id = rows.insertId;
      var insertScore = "insert into scores values(null," + student_id + "," + 1 + "," + add.chinese + "),(null," + student_id + "," + 2 + "," + add.math + "),(null," + student_id + "," + 3 + "," + add.english + ");";
      connection.query(insertScore, function(err, rows) {
        if (err) throw err;
      });
    }
    connection.end();
  });


});

module.exports = router;
