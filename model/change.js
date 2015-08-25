exports.change = function(results) {
  var scoreList = [];
  results.forEach(function(val) {
    for (var i = 0; i < scoreList.length; i++) {
      if (scoreList[i].student_id === val.student_id) {
        scoreList[i][val.subject_name] = val.score;
        return;
      }
    }
    var tempObject = {};
    tempObject.name = val.student_name;
    tempObject[val.subject_name] = val.score;
    tempObject.student_id = val.student_id;
    scoreList.push(tempObject);
    // console.log(scoreList);
  });
  return scoreList;
};
