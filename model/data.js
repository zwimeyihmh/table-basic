var datas = require('../data.json');

function Process() {

}
Process.prototype.process = function() {
  var tab = [];
  for (var data in datas) {
    tab.push(datas[data]);
  }
  return tab;
};
module.exports = Process;
