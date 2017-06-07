(function(){
	var sum = 0;
	var x = prompt('Enter how many numbers:');
	while(isNaN(x)===true){
		x = prompt('Enter how many numbers:');
	}
	var number = prompt('Enter a number:')
	for (var i = 0; i < parseInt(x); i++) {
		var number = prompt('Enter a number:');
		while(isNaN(number) === true){
			number = prompt('Enter a number NOT A STRING:');
		}
		sum += parseInt(number);
		document.getElementsByClassName('container')[0].innerHTML += 'Enter a number:' + number + '<br>';
	
	}
		document.getElementsByClassName('container')[0].innerHTML += 'The total is' + ' ' + sum + '.';





})();


