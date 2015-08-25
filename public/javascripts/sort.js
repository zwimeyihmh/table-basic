$(function() {

  $('thead').on('click', 'th', function() {
    var order = $(this).data('order');
    if ($(this).data('id') !== undefined) {
      var alls = [];
      var _this = $(this);
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
      var result;
      $.get('/score',{
        alls:alls,
        subject:subject,
        order:order
      },function(resq) {
        // console.log(resq);
        result=resq;
        var k = 0;
        $('tbody tr').each(function(i, n) {
          var sc = $("td", this);
            var person = sc.eq(0).text(result[k].name);
            var chinese = sc.eq(1).text(result[k].chinese);
            var math = sc.eq(2).text(result[k].math);
            var english = sc.eq(3).text(result[k].english);
            k++;
        });
      });
      console.log(result);

      console.log(_this.data);
      _this.data("order",-order);
    }
  });


  $('.tabl').on('click', '.delete', function() {
    var nameDeleted = $(this).closest('tr').find('td').eq(0).text().trim();
    var sid = $(this).closest('tr').find('td').eq(0).data('id');
    // alert()
    $('tbody tr').each(function(i, n) {
      var sc = $("td", this);
      var name = $("td", this).eq(0).text().trim();
      var id = $("td", this).eq(0).data('id');
      if (id === sid) {
        alert("删除？" + sid);
        var self = $(this);
        $.ajax({
          url: '/del',
          data: {
            id: sid
          },
          type: 'delete',
          success: function(information) {
            console.log(information);
            if (information.status === 200) {
              self.remove();
            }
          }
        });
      }

    });
  });

  $('.add').on('click', function() {
    var addn = prompt("name=?");
    var addc = prompt("chines=?");
    var addm = prompt("math=?");
    var adde = prompt("english=?");
    var add = {
      name: addn,
      chinese: parseInt(addc),
      math: parseInt(addm),
      english: parseInt(adde)
    };
    $.ajax({
      url: '/add',
      data: add,
      type: 'post',
      success: function(information) {
        if (information.status === 200) {
          var newRow = "<tr><td data-id='" +information.data +"'>"+ addn + "</td><td>" + addc + "</td><td>" + addm + "</td><td>" + adde + "</td>" + " <td><button type='button' name='button' class='delete' id='del'>删除</button></td><tr>";
          $("tbody").append(newRow);

        }
      }
    });
  });



});
