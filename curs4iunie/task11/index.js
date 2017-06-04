(function() {

	var money = prompt('How many euros are you exchanging?');
	var exchange = prompt('What is the exchange rate?');
	var amount = (euro * exchange / 100).toFixed(2);
	


	document.getElementById('demo').innerHTML = 'How many euros are you exchanging?';
	document.getElementById('demo2').innerHTML = 'What is the exchange rate?';
	document.getElementById('demo3').innerHTML = money + ' ' +  'euros at an exchange rate of' + ' ' + exchange + 'is' + ' ' + amount + ' ' + 'U.S. dollars';


})();