(function(){

	var weight = prompt('Enter your weight:');
	var gender = prompt('Enter your gender:');
	var numberd = prompt('Enter the number of drinks:');
	var amountofTime = prompt('Enter the amountofTime:');
	var volumeofdrink = prompt('Enter the volumeofdrink:');

	if (gender == 'female') {
		var bac = ((numberd * volumeofdrink * 5.14) / (weight * 0.73)) - 0.015 * amountofTime;
	}else {
		var bac = ((numberd * volumeofdrink * 5.14) / (weight * 0.73)) - 0.015 * amountofTime;
	}	
		document.getElementById('demo').innerHTML = 'Your BAC is:' + ' ' + bac ;

		if (bac < 0.08) {
			document.GetElementById('demo1').innerHTML = 'It is legal for drive.'

		}else {
			document.GetElementById('demo2').innerHTML = 'Is is not legal four you drive.'
		}

})();