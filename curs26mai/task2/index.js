(function() {
	var amalia = prompt('what is the input string?');
	 document.getElementById("demo").innerHTML = "what is your input string?" + amalia;
	 document.getElementById("demo2").innerHTML = amalia + 'has' + amalia.length + 'characters';
})();