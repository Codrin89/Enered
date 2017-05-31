(function(){

	var sum = 0
	var x = prompt('Enter how many numbers do you want to enter?');
	while(isNaN(x)===true){
		x = prompt('Enter how many numbers do you want to enter?');
	}
	for(var i = 0; i < parseInt(x); i++) {
		var number = prompt('Enter a number');
		if(isNaN(number)!=true){
			sum += parseInt(number);
		    document.getElementsByClassName('demo')[0].innerHTML += 'Enter a number' + number + '<br>';
		} else {
			i--;
		}
	}
		document.getElementsByClassName('demo')[0].innerHTML += 'The total is' + sum + '.';

})();