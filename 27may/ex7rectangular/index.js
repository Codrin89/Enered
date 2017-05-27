(function(number){
   var feetOrMeters = prompt("Do you want to use feet of meters?");
     while(feetOrMeters!="feet" && feetOrMeters!="meters"){
    	feetOrMeters = prompt("Do you want to use feet of meters?");
     }
 if(feetOrMeters==="feet"){
   var length = prompt("What is the length of the room in feet?");
   while(isNaN(length)===true){
    	length = prompt("Insert the length of the room in feet!");
    }
   var width = prompt("What is the width of the room in feet?");
    while (isNaN(width)===true) {
    	width = prompt("Insert the width of the room in feet!");
    }
  

  var squareFeet= parseInt(length) * parseInt(width);
  var squareMeters= squareFeet * 0.09290304;

  document.getElementById("demo").innerHTML=
  "You entered dimensions of " + length +  " feet by "+ width +" feet."+"<br>"+
  "The area is: " + "<br>" + squareFeet + " square feet " +"<br>"+
  squareMeters + " square meters.";
 
 } else {
   var length = prompt("What is the length of the room in meters?");
   while(isNaN(length)===true){
    	length = prompt("Insert the length of the room in meters!");
    }
   var width = prompt("What is the width of the room in meters?");
    while (isNaN(width)===true) {
    	width = prompt("Insert the width of the room in meters!");
    }
  

  var squareMeters= parseInt(length) * parseInt(width);
  var squareFeet= squareMeters / 0.09290304;

  document.getElementById("demo").innerHTML=
  "You entered dimensions of " + length +  " meters by "+ width +" meters."+"<br>"+
  "The area is: " + "<br>" + squareMeters + " square meters " +"<br>"+
  squareFeet + " square feet.";

 }
})();

