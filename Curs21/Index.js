(function(){
	var person = prompt('What is your name');
	if (person != null) {
		document.getElementById('name').innerHTML = 'What`s your input string? ' + person;
		document.getElementById('prompt').innerHTML = person + ' has ' + person.length + ' characters';
	};
	var qoute = prompt('What is the qoute?');
	document.getElementById('qoute').innerHTML = 'What is the qoute?' + qoute;
})();