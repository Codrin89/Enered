(function(){

   var weight = prompt("What is your weight?");
   while(isNaN(weight)===true){
    	weight = prompt("What is your weight?");
    }
   var gender = prompt("Men or women?");
    while (isNaN(gender)!=true) {
    	gender = prompt("Men or women?");
    }  
   var numofdrinks = prompt("How manny drinks did hou had?");
   while(isNaN(numofdrinks)===true){
      numofdrinks = prompt("How manny drinks did hou had?");
    }
   var amountofalcohol = prompt("What is the ammount of alcohol by volume of the drinks consumed?");
   while(isNaN(amountofalcohol)===true){
      amountofalcohol = prompt("What is the ammount of alcohol by volume of the drinks consumed?");
    }
   var amountoftime = prompt("How much time passed since the last drink?");
   while(isNaN(amountoftime)===true){
      amountoftime = prompt("How much time passed since the last drink?");
    }
   
   var a = numofdrinks * amountofalcohol;

   if(gender !="men"){
    var bac = ((a * 5.14)/(weight * 0.66))-0.015 * amountoftime;

  } else {
    var bac = ((a * 5.14)/(weight * 0.73))-0.015 * amountoftime;
  }

  if(bac < 0.08){
    document.getElementById("container").innerHTML=
  "Your BAC is " + bac + "<br>"+
  "You can go for a drive.";
  } else{
    document.getElementById("container").innerHTML=
   "Your BAC is " + bac + "<br>"+
  "It is not legal for you to drive.";
  }
})();
