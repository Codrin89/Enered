(function(){
	var hello = prompt("What is your name?", "Brian");

	if (hello != null) {
	    document.getElementById("demo").innerHTML = "Hello " + hello + " nice to meet you!";
	}
})();