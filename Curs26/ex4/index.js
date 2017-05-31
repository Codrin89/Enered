(function(){
	var noun=prompt("Enter a noun:");
	var x = document.getElementById("noun").innerHTML =  ' ' + noun; 


	var verb=prompt("Enter a verb:");
	var y =document.getElementById("verb").innerHTML =  ' ' + verb; 

	var adjective=prompt("Enter a adjective:");
	var z =document.getElementById("adjective").innerHTML =  ' ' + adjective; 

	var adverb=prompt("Enter a adverb:");
	var w =document.getElementById("adverb").innerHTML =  ' ' + adverb; 

	document.getElementById("multi-text").innerHTML = "Do you " + y + " your " +  " " + x + " " + w + " ? That's hilarious!"; 

})();