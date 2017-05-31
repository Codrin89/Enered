(function(){
	var presentAge=prompt("What is the length of the room in feet?");
	var pAge = parseInt(presentAge);
	var x = document.getElementById("length").innerHTML =  ' ' + pAge; 

	var willAge=prompt("What is the width of the room in feet?");
	var wAge = parseInt(willAge);
	var y = document.getElementById("width").innerHTML =  ' ' + wAge; 


	document.getElementById("info").innerHTML =  "You entered dimensions of " + pAge + " feet by " + wAge + " feet" ;
	document.getElementById("area").innerHTML =  "The area is " + (pAge*wAge) + " square feet" ;
})();