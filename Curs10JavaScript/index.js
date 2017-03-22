(function() {

	// funciton addEventListener(event, functia)
	var number1 = 3;
    var number2 = 5;
    var string1 = 'something';
    var string2 = 'something';

	//document.getElementById('button').addEventListener('click', function() {
	// 	alert('something');
	// 	clickValidator(this);
	// });

	// function clickValidator(button) {
	// 	var inputValue = document.getElementById('input-data');
	// 	console.log(inputValue.value);
	// }

	// document.getElementsByTagName('body')[0].addEventListener('keypress', function(event) {
	// 	console.log(event.keyCode);
	// 	if(event.keyCode == 13) {
	// 		alert('You have pressed enter!!!');
	// 	}
	//     if(event.keyCode == 32) {
	// 		alert('you have pressed space!!!');
			
	// 	}
	// })


	//var rezultat = nume + nume2 + nume3;
	// console.log(rezultat);
		function addNumbers(number1, number2) {
			return number1 + number2;
		}

		var rezultat = addNumbers(number1, number2);
		console.log(rezultat);
		rezultat = addNumbers(20, 30);
		console.log(rezultat);

		function concatStrings(string1, string2) {
			return string1 + string2;
		}
		function minusNumbers(value1, value2) {
			return value1 - value2;
		}
		function divideNumbers(value1, value2) {
			return value1 / value2;
		}
		function multipleNumbers(value1, value2) {
			return value1 * value2;
		}


		var stringResult = concatStrings(string1, string2);
		console.log(stringResult);


		var concat = addNumbers(string1, string2);
		var add = addNumbers(number1, number2);
		console.log(add + concat);


		var add = addNumbers(number1, number2);
		var minus = minusNumbers(add, number2);
		console.log(minus);


		var add = addNumbers(number1, number2);
		var minus = minusNumbers(add, number2);
		var divide = divideNumbers(add, number2);
		console.log(divide);

		var add = addNumbers(number1, number2);
		var minus = minusNumbers(add, number2);
		var multiple = multipleNumbers(add, number2);
		console.log(multiple);

		var radical = Math.sqrt(minus) + '';
		console.log(radical.split('')[5]);

		var radical = Math.sqrt(minus) + '';
		var resultArray = radical.split('');
		for(var i = 0 ; i < resultArray.lenght ; i++) {
			if(resultArray[i] == '.') {
				console.log('punct');
			}
		}

})();