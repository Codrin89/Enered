(function(number){

   var length = prompt("What is the length of the room in feet?");
   while(isNaN(length)===true){
    	length = prompt("Insert the length of the room in feet!");
    }
   var width = prompt("What is the width of the room in feet?");
    while (isNaN(width)===true) {
    	width = prompt("Insert the width of the room in feet!");
    }
  

  var squareFeet= parseInt(length) * parseInt(width);
  var paintBySquareFeet= Math.ceil(squareFeet / 350);
  

  if(paintBySquareFeet === 0){
   document.getElementById("demo").innerHTML=
   "You don't need paint!";
  } else if (paintBySquareFeet === 1){
    document.getElementById("demo").innerHTML=
  "You will need to purchase " + paintBySquareFeet +  " gallon of paint to cover "+ squareFeet +" square feet.";
  } else{
    document.getElementById("demo").innerHTML=
  "You will need to purchase " + paintBySquareFeet +  " gallons of paint to cover "+ squareFeet +" square feet.";
  }
})();




















