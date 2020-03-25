
var add = function(number1, number2) {
    return number1 + number2;
  };

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1 , number2){
  return number1 / number2
};
  

$(document).ready(function(){
    $("form#add").submit(function(event){
      event.preventDefault();
   
    
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);


    $("#addOutput").text(result);
    
});

$("form#sub").submit(function(event){
  event.preventDefault();

  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());
  var subresult = subtract(number1, number2);
  $("#subOutput").text(subresult);
});

$("form#multi").submit(function(event){
  event.preventDefault();

  var number1 = parseInt($("#multi1").val());
  var number2 = parseInt($("#multi2").val());
  var subresult = multiply(number1, number2);
  $("#multiOutput").text(subresult);
});

$("form#divide").submit(function(event){
  event.preventDefault();

  var number1 = parseInt($("#div1").val());
  var number2 = parseInt($("#div2").val());
  var divresult = divide(number1, number2);
  $("#divOutput").text(divresult);
});






  })