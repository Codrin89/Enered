(function(){

var number1 = 3;
var number2 = 5;
var string1 = 'ceva';
var string2 = 'ceva';

// function addNumbers(number1, number2) {
// 	return number1 + number2;
// }
// 	 var rezultat = addNumbers(number1, number2);
// 	 var rezultat = addNumbers(20, 30);
// 	 console.log(rezultat);

	 function addNumbers(string1, string2){
	 	return string1 + string2;		
	 }

	 function minusNumbers(string1, string2){
	 	return string1 - string2;

	 }
	 function divideNumbers (string1, string2) {
	 	return string1 / string2;
	 }
	 function mariusNumbers(string1,string2) {
	 	return string1 * string2;
	 }
	 
	 var add = addNumbers(number1, number2);
	 var minus = minusNumbers(add, number2);
	 var divide = divideNumbers(add, number2);
	 var marius = mariusNumbers(add,number1);
	 console.log(divide);
	 console.log(marius);

	 var radical = Math.sqrt(minus);
	 console.log(radical);

})();