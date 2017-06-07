(function(){

	var qoute = prompt('What is the qoute?');
	document.getElementById('qoute').innerHTML = 'What is the qoute?' + qoute;
	var name = prompt('Who said it?');
	document.getElementById('name').innerHTML = 'Who said it?' + name;
	document.getElementById('both').innerHTML = name + ' says, ' + qoute;

})();