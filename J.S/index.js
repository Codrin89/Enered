(function(){
     var number1 = 3;
     var number2 = 5;
     var string1 = 'something';
     var string2 = 'something';

  
function addNumbers(value1,value2){
	return value1 + value2;
}
function minusNumbers(value1,value2){
	return value1 - value2;
}
function divideNumbers(value1,value2){
	return value1 / value2;
}
function inmultitNumbers(value1,value2){
	return value1 * value2;
}
var add = addNumbers(number1,number2); ///add=3+5=8
var minus = minusNumbers(add, number2);///minus=8-5=3
var divide = divideNumbers(add, number2);
var inmultit =inmultitNumbers(add, number2);
console.log(divide);
console.log(minus);

var radical = Math.sqrt(minus) + '';
console.log(radical.split('')[5]);



})();