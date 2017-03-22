(function() {
	var number1 = 3;
	var number2 = 5;
	var string1 = 'something';
	var string2 = 'something';
	function addNumbers(value1, value2){
		return value1+value2;
	}
		function minusNumbers(value1, value2){
		return value1-value2;
	}
		function divideNumbers(value1, value2){
			return value1/value2;
	}
			function multipleNumbers(value1, value2){
			return value1*value2;
	}
	var add=addNumbers(number1, number2);
	console.log(add);
	var minus=minusNumbers(add, number2);
	console.log(minus);
	var divide=divideNumbers(add,number2);
	console.log(divide);
	var multiple=multipleNumbers(add,number2);
	console.log(multiple);
	var radical=Math.sqrt(minus);
	console.log(radical);
	var radical=Math.sqrt(minus)+'';
	var resultArray=radical.split('');
	for(var i=0;i<resultArray.lenght;i++){
		if(resultArray[i]=='.'){
			console.log('punct');
		}
	}

})();