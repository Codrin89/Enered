(function() {

	var first = prompt('What is the first number?');
	var second = prompt('What is the second number?');

	var x = parseInt(first);
	var y = parseInt(second);
	document.getElementById('demo').innerHTML = 'What is the first number?' + ' ' + first;
	document.getElementById('demo2').innerHTML = 'What is the second number?' + ' ' + second;
	document.getElementById('demo3').innerHTML = x + y;
	document.getElementById('demo4').innerHTML = x - y;
	document.getElementById('demo5').innerHTML = x * y;
	document.getElementById('demo6').innerHTML = x / y;



})();