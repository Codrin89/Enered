(function() {

	var age = prompt('What is your current age?');
	var pensionare = prompt('At what age would you like to retire?');

	document.getElementById('demo').innerHTML = 'What is your current age?' + " " + '28';
	document.getElementById('demo2').innerHTML = 'At what age would you like to retire' + '68';
	
	var dif = parseInt(age);
	var diff = parseInt(pensionare);

	document.getElementById('demo4').innerHTML = 'You' + ' ' + 'have' + ' ' + (diff - dif) + ' ' + 'years' + ' ' + 'left' + ' ' + 'until' + ' ' + 'can' + ' ' + 'retire' + '.';

	var aniramasi = parseInt(2017 + (diff - dif));
	document.getElementById('demo5').innerHTML = 'It' + ' ' + 'is' + ' ' + 2017 + ',' + 'so' + ' ' + 'you' + ' ' + 'can' + ' ' + 'retire' + ' ' + 'in' + ' ' + (2017 + (diff - dif)) + '.';



})();