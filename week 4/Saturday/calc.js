$(document).ready(function(){

  function calculator(){
    var sum = "";
    var len;
    //var arr= [];
    var operators = ["+", "-", "*", "/", "^"];
    var inputVal = document.getElementById("result");
    $(".buttons .number").on('click', function() {
      var num = $(this).attr('value');
      sum += num;
;
      $("#result").html(sum);
    len = inputVal.innerHTML.split("");
    console.log(len);


    });
    $(".buttons .operator").on('click', function(e) {
      e.preventDefault();
      var ops = $(this).attr('value');
      sum += ops;

      $("#result").html(sum);
       len = inputVal.innerHTML;
      if(/(?=(\D{2}))/g.test(sum)) {
        sum = len.substring(0, len.length - 1);
        $("#result").html(sum);
      }
 
    });


    $("#equal").on('click', function() {
      var total =  eval(sum);
      $("#result").html(total % 1 != 0 ? total.toFixed(2) : total);
    });

    $("#clear").on('click', function() {
       sum = "";
       arr = [];
        $("#result").html(0);
    });

    };
          calculator();
});
