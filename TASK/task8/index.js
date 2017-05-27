(function() {

	var people = prompt('How many people?');
	var nrpizza = prompt('How many pizzas do you have?');

	document.getElementById('demo').innerHTML = 'How many people?' + people;
	document.getElementById('demo2').innerHTML = 'How many pizzas do you have?' + nrpizza; 

	var slice = 4;
	var perpeople = Math.floor((slice * nrpizza) / people);
	var leftover = (slice * nrpizza) - (perpeople * people);

	//Math.floor 0.3 , 0.6 = 6;
	//Math.ceil 0.3 , 0.6 = 1;
	//Math.round 0.3 , 0.6 = 1;

	document.getElementById('demo3').innerHTML = people + ' ' + 'people' + ' ' + 'with' + ' ' + nrpizza + ' ' + 'pizzas';  
	document.getElementById('demo4').innerHTML = 'Each' + ' ' + 'person' + ' ' + 'gets' + ' ' + perpeople + ' ' +  'pieces of pizza';
	document.getElementById('demo5').innerHTML = 'There' + ' ' + 'are' +  ' ' + leftover + ' ' + 'pieces';

})();