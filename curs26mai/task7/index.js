(function() {
	
	var length = prompt('What is the length of the room in feet?');
	var width = prompt('What is the width of the room in feet? ');
	var a = parseInt(length);
	var b = parseInt(width);


	document.getElementById("demo").innerHTML = 'This are is' ;
	document.getElementById("demo2").innerHTML = a * b ;
	document.getElementById("demo3").innerHTML = 'square feet';

	
	
})();