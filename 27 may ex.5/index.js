(function(){

    var number1 = prompt('What is the first number?');
	var number2 = prompt('What is the second number?');
	number1 = parseInt(number1);
	number2 = parseInt(number2);
	document.getElementById('sum').innerHTML = number1 + number2  ;
	document.getElementById('difference').innerHTML = number1 - number2;
	document.getElementById('product').innerHTML = number1 * number2;
	document.getElementById('quotient').innerHTML = number1 / number2;
	
	

})();