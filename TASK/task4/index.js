(function() {

	var substantiv = prompt('Enter a noun:');
	var verb = prompt('Enter a verb:');
	var adjectiv = prompt('Enter an adjective:');
	var adverb = prompt('Enter an adverb');

	document.getElementById('demo').innerHTML = 'Enter a noun:' + ' ' + substantiv;
	document.getElementById('demo2').innerHTML = 'Enter a verb:' + ' ' + verb;
	document.getElementById('demo3').innerHTML = 'Enter a adjectiv:' + ' ' + adjectiv;
	document.getElementById('demo4').innerHTML = 'Enter a adverb:' + ' ' + adverb;
	document.getElementById('demo5').innerHTML = 'do' + ' ' + 'you' + ' ' + 'walk' + ' ' + 'your' + ' ' + 'blue' + ' ' + 'dog' + ' ' + 'quickly'  + '?' + 'That' + ' ' + 'is' + ' ' + 'hilarious';
})();