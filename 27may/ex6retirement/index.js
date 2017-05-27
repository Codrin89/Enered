(function(number){
   var age = prompt("What is your current age?");
   while(isNaN(age)===true){
    	age = prompt("Insert your current age!");
    }
   var retAge = prompt("At what age would you like to retire?");
    while (isNaN(retAge)===true) {
    	retAge = prompt("Insert at what age would you like to retire!");
    }
 var retire = parseInt(retAge) - parseInt(age);
 var d = new Date();
 var year= d.getFullYear();
 var ageRetirement = year + retire;



 if(retire<0){
 	document.getElementById("demo").innerHTML=
    "You have "+retire+" years left until you can retire." + "<br>" +
 	"You can already retire!";
 } else {
 	document.getElementById("demo").innerHTML=
    "You have "+retire+" years left until you can retire." + "<br>" +
 	"It's " + year + ", so you can retire in " + ageRetirement;
 }

})();


