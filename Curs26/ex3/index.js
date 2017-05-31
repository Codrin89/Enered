(function(){
	var quote=prompt("What is the quote?");
	var x = document.getElementById("quote").innerHTML =  ' ' + quote; 


	var name=prompt("Who said it?");
	var y =document.getElementById("name").innerHTML =  ' ' + name; 

	document.getElementById("says").innerHTML = y + " says , " + " \" " + x + "\" "; 

})();