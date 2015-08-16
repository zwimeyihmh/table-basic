var Process = require('../model/data.js');
var mysql = require('mysql');

function Controller() {

}



Controller.prototype.getManage = function(req, res) {
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test'
  });
  connection.connect();
  // var insert = 'insert into basic values("demo1",67,87,56)';
  var select = 'select * from basic';
  var deleteS = "delete from basic where name = 'sunny'";
  connection.query(select, function(err, results) {
    if (err) {
      throw err;
    } else {
      datas = results;
      console.log(datas);
    }
  });

  // var proce = new Process();
  // var datas = proce.process();
  res.render('index', {
    scores: datas
  });
  connection.end();
};
module.exports = Controller;
