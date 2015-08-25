function Sort(disorder, subject) {
  this.disorder = disorder;
  this.subject = subject;
}

Sort.prototype.order = function(alls,subject,order) {
  var result = [];
      result = alls.sort(function(a, b) {
        return parseInt(order) * (parseInt(a[subject]) - parseInt(b[subject]));
      });

  return result;

};
module.exports = Sort;
