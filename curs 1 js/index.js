(function() {
	var number1 = 3;
	var number2 = 5;
	var string1 = 'something';
	var string2 = 'something';

	function addNumbers(number1, number2) {
		return number1 + number2;
	}

	var rezultat = addNumbers(number1, number2);


	var rezultat = addNumbers(number1, number2);
	console.log(rezultat);
	var rezultat = addNumbers(20, 30);
	console.log(rezultat);



	function addNumbers(value1, value2) {
		return value1 + value2;
	}

	function minusNumbers(value1, value2) {
		return value1 - value2;
	}
	function divideNumbers(value1, value2) {
		return value1 / value2;
	}
	function multipleNumber(value1, value2) {
  		return value1 * value2;
	}

	var add = addNumbers(number1, number2);
	var minus = minusNumbers(add, number2);
	var divide = divideNumbers(add, number2);
	var multiple = multipleNumber(add, number2)
	var radical = Math.sqrt(minus) +'';
	console.log(radical.split('')[5]);




})();