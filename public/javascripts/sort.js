$(function() {

  $('thead').on('click', 'th', function() {
    var skey = $(this).data('order');
    if ($(this).data('id') !== undefined) {
      var alls = [];
      var subject = $(this).data('id');

      $('tbody tr').each(function(i, n) {
        var sc = $("td", this);
        var person = sc.eq(0).text();
        var chinese = sc.eq(1).text();
        var math = sc.eq(2).text();
        var english = sc.eq(3).text();
        alls.push({
          name: person,
          chinese: chinese,
          math: math,
          english: english

        });
      });

      // console.log(subject);
      // var sort = new Sort(alls,subject);
      var result = [];
      if (skey === 'or') {
        if (subject === "chi") {
          result = alls.sort(function(a, b) {
            return parseInt(a.chinese) - parseInt(b.chinese);
          });
        }
        if (subject === "mat") {
          result = alls.sort(function(a, b) {
            return parseInt(a.math) - parseInt(b.math);
          });
        }
        if (subject === "eng") {
          result = alls.sort(function(a, b) {
            return parseInt(a.english) - parseInt(b.english);
          });
        }
      }

      if (skey === 'de') {
        if (subject === "chi") {
          result = alls.sort(function(a, b) {
            return parseInt(b.chinese) - parseInt(a.chinese);
          });
        }
        if (subject === "mat") {
          result = alls.sort(function(a, b) {
            return parseInt(b.math) - parseInt(a.math);
          });
        }
        if (subject === "eng") {
          result = alls.sort(function(a, b) {
            return parseInt(b.english) - parseInt(a.english);
          });
        }
      }
      console.log(skey);
      var k = 0;
      $('tbody tr').each(function(i, n) {
        var sc = $("td", this);
        var person = sc.eq(0).text(result[k].name);
        var chinese = sc.eq(1).text(result[k].chinese);
        var math = sc.eq(2).text(result[k].math);
        var english = sc.eq(3).text(result[k].english);
        k++;
      });
    }
  });


$('.tabl').on('click','.delete',function() {
  var i = 0;
  var a= $(this).find('tr td').eq(0).text();
  alert(a);
  $('tbody tr').each(function() {
    if($(this).eq(i).find('.delete') === a) {
      alert('123');
    }
  });
});
  // $('.butt').on('click',function() {
  //   var a = $('#tab tr:last');
  //   var appe = "<tr><td>name</td><td>chinese</td><td>math</td><td>english</td></tr>";
  //
  //   alert('123');
  // });
});
