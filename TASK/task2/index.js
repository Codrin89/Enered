(function() {

	var sir = prompt('What is the input string?');
	document.getElementById('demo').innerHTML = 'What is your input string?' + sir;	
	document.getElementById('demo2').innerHTML = sir + ' has ' + sir.length + ' char';



})();