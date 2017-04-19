(function(){
	//function addEventListener(event,functia)

	var number1 = 3;
	var number2 = 5;
	var string1 = 'something';
	var string2 ='something';
	function addNumbers(value1,value2){
		return value1+value2
	}

	function minusNumbers(value1, value2){
		return value1-value2;
	}
function divideNumbers(value1,value2){
	return value1/value2;
}


function multipleNumbers(value1,value2){
	return value1*value2;
}

var add=addNumbers(number1,number2);
var minus=minusNumbers(add, number2);
var divide=divideNumbers(add,number2);
var multiple=multipleNumbers(add,number2);

console.log(multiple);



})();