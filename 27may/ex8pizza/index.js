(function(number){
   var people = prompt("How many people?");
   while(isNaN(people)===true){
    	people = prompt("Insert how many people!");
    }
   var pizzas = prompt("How many pizzas do you have?");
    while (isNaN(pizzas)===true) {
    	pizzas = prompt("Insert how many pizzas do you have!");
    }
    var slices = prompt("How many slices does a pizza have?");
    while (isNaN(slices)===true) {
    	slices = prompt("Insert how many slices does a pizza have!");
    }


   var numberOfSlices = parseInt(pizzas) * parseInt(slices);
   var slicesByPerson1 = numberOfSlices / parseInt(people);
   var slicesByPerson2 = Math.floor(slicesByPerson1);
   var leftovers = numberOfSlices - (slicesByPerson2 * people);


   if(slicesByPerson2 === 1){
   document.getElementById("demo").innerHTML=
   people + " people with " + pizzas + " pizzas" + "<br>" +
   "Each person gets " + slicesByPerson2 + " piece of pizza. " + "<br>" +
   "There are " + leftovers + " leftover pieces.";
   } else if (slicesByPerson2 === 0) {
   document.getElementById("demo").innerHTML=
   people + " people with " + pizzas + " pizzas" + "<br>" +
   "No one gets pizza" + "<br>" +
   "There are " + leftovers + " leftover pieces.";
   } else {
    document.getElementById("demo").innerHTML=
   people + " people with " + pizzas + " pizzas" + "<br>" +
   "Each person gets " + slicesByPerson2 + " pieces of pizza. " + "<br>" +
   "There are " + leftovers + " leftover pieces.";
   }




})();


