(function() {
	// function addEventListener(event, functia)
	var number1 = 3;
	var number2 = 5;
	var string1 = 'something';
	var string2 ='something';

	function addNumers(value1, value2) {
		return value1 + value2;
	}
	function minusNumers(value1, value2) {
		return value1 - value2;
	}
	function divideNumbers(value1, value2) {
		return value1 / value2;
	}
	function multipleNumbers(value1, value2) {
		return value1 * value2;
	}

	var add = addNumers(number1, number2);
	var minus = minusNumers(add, number2);
	var divide = divideNumbers(add, number2);
	var multiple = multipleNumbers(add, number2);
	console.log(divide);
	console.log(minus);

	var radical = Math.sqrt(minus) + '';
	var resultArray = radical.split('');
	for(var i = 0 ; i < resultArray.length ; i++) {
		if(resultArray[i] =='.') {
			console.log('punct');
		}
	}

})();