var Process = require('../model/data.js');
var mysql = require('mysql');
var change = require('../model/change.js');
function Controller() {

}



Controller.prototype.getManage = function(req, res,next) {
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test'
  });
  connection.connect();
  // var insert = 'insert into basic values("demo1",67,87,56)';
  var select = "select a.student_id,b.student_name,c.subject_name,a.score"+
  " from scores a,students b,subjects c"+
  " where a.student_id = b.student_id and a.subject_id = c.subject_id;";
  // var select = 'select * from basic';
  connection.query(select, function(err, results) {
    if (err) {
      throw err;
    } else {
      datas = change.change(results);
      // console.log(datas);
      // datas = results;
    }
    res.render('index', {
      scores: datas
    });
    connection.end();
  });
};
module.exports = Controller;
