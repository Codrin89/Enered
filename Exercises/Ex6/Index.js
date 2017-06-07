(function() {
	var age = prompt('Age:');
	var retire = prompt('Retire:');
	document.getElementById('age').innerHTML = 'Age:' + age;
	document.getElementById('retire').innerHTML = 'Retire:' + retire;
	document.getElementById('until').innerHTML = 'You have ' + (retire - age ) + 'years left until you can ritire.'
	document.getElementById('anu').innerHTML = 'It\'s 2017, so you can retire in ' + (2017 + (retire - age));
})();