(function(){
	var presentAge=prompt("How many people?");
	var pAge = parseInt(presentAge);
	var x = document.getElementById("people").innerHTML =  ' ' + pAge; 

	var willAge=prompt("How many pizzas do you have?");
	var wAge = parseInt(willAge);
	var y = document.getElementById("pizza").innerHTML =  ' ' + wAge; 


	document.getElementById("info").innerHTML =  pAge + " people with " + wAge + " pizzas" ;
	document.getElementById("pic").innerHTML =  "Each person gets " + Math.floor(wAge*8/pAge) + " pieces of pizza." ;
	document.getElementById("pieces").innerHTML =  "There are " + (wAge*8-wAge*8/pAge) + " leftover pieces." ;
})();