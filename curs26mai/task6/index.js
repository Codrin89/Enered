(function() {
	
	var age = prompt('What is your current age?');
	var retire = prompt('At what age would you like to retire? ');
	var a = parseInt(age);
	var b = parseInt(retire);
	var current = parseInt(2017);
	document.getElementById("demo").innerHTML = a - b;
	document.getElementById("demo").innerHTML = 2017 - (a - b);
	
})();