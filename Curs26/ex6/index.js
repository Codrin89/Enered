(function(){
	var presentAge=prompt("What is your current age?");
	var pAge = parseInt(presentAge);
	var x = document.getElementById("present-age").innerHTML =  ' ' + pAge; 

	var willAge=prompt("At what age would you like to retire?");
	var wAge = parseInt(willAge);
	var y = document.getElementById("will-age").innerHTML =  ' ' + wAge; 


	document.getElementById("diference").innerHTML =  "You have " + (wAge-pAge) + " years left until you can retire.";
	var yearP = new Date().getFullYear();
	// var yearW = ....;
	document.getElementById("response").innerHTML =  "It's " + yearP + " so you can retire in " + (yearP+wAge-pAge);
})();