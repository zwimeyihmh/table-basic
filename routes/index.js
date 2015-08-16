var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var Controller = require('../controller/main.js');
/* GET home page. */
var controller = new Controller();
router.get('/',controller.getManage);
// router.post('/');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'test'
});
connection.connect();
router.get("/del",function(req,res){
  alert('del');
  var deleteS = "delete from basic where name=" +'\''+req.query.nm +'\'';
//  console.log(sql);
  connection.query(deleteS,function(err,rows){
    if(err) throw err;
    //res.send("deleted");
  });
});
connection.end();

module.exports = router;
