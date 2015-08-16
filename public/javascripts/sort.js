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


  $('.tabl').on('click', '.delete', function() {
    var k = 0;
    var a = $(this).closest('tr').find('td').eq(0).text();
    $('tbody tr').each(function(i, n) {
      var sc = $("td", this);
      var aa = $("td", this).eq(0).text();
      var person;
      var chinese;
      var math;
      var english;
      if (aa === a) {
        alert("删除？");
        person = sc.eq(0).text("");
        chinese = sc.eq(1).text("");
        math = sc.eq(2).text("");
        english = sc.eq(3).text("");
        deleted = sc.eq(4).text("");
        $.get("/del", {
          nm: a
        }, function(req) {
          alert('sort');
        });

      }
      // else {
      //     person = sc.eq(0).text();
      //     chinese = sc.eq(1).text();
      //     math = sc.eq(2).text();
      //     english = sc.eq(3).text();
      //     alls.push({
      //       name: person,
      //       chinese: chinese,
      //       math: math,
      //       english: english
      //
      //     });
      // }

    });
    // alert(alls);
  });
});
$('.add').on('click', function() {
  alert('wer');
  var addn = prompt("name=?");
  var addc = prompt("chines=?");
  var addm = prompt("math=?");
  var adde = prompt("english=?");
  var newRow = "<tr><td>" + addn + "</td><td>" + addc + "</td><td>" + addm + "</td><td>" + adde + "</td>" + " <td><button type='button' name='button' class='delete' id='del'>删除</button></td><tr>";
  $("tbody").append(newRow);
});
$('.tabl').on('click', '.add', function() {
  alert('123');

  // $('.butt').on('click',function() {
  //   var a = $('#tab tr:last');
  //   var appe = "<tr><td>name</td><td>chinese</td><td>math</td><td>english</td></tr>";
  //
  //   alert('123');
  // });
});
