(function(){

	var weight = prompt('enter your weight');
	var gender = prompt('enter your gender');
	var drinks = prompt('enter the number of drinks');
	var time = prompt('enter the time sience your last drink');
	var alcohol = prompt('enter the amount of alcohol');

	if(gender == 'woman') {
		var BAC = ((drinks * alcohol * 5.14) / (weight * 0.66)) - 0.015 * time;
	} else {
		var BAC = ((drinks * alcohol * 5.14) / (weight * 0.73)) - 0.015 * time;
	}


	document.getElementById('demo').innerHTML = 'your BAC is' + ' ' + BAC;


	if(BAC < 0.08) {
		document.getElementById('demo2').innerHTML = 'It is legal for you to drive';
	} else {
		document.getElementById('demo3').innerHTML = 'It is not legal for you to drive';
	}


})();