(function() {

	var citat = prompt('What is the quote?');
	var autor = prompt('Who said it?');

	document.getElementById('demo').innerHTML = 'What is the quote? ' + ' ' + citat;
	document.getElementById('demo2').innerHTML = 'Who said it?' + ' ' + autor;
	document.getElementById('demo3').innerHTML = autor + ' ' + 'says' + ',' + ' "' + citat + '"';
})();