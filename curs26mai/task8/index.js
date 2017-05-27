(function() {


	var people = prompt('How many people?');
	var pizza = prompt('How many pizzas do you have?');
	var slice = 8;
	var perpeople = Math.floor((slice * pizza) / people);
	var leftover = ( slice * pizza ) - ( perpeople * people);
	

   //Math.floor 0.3 , 0.6 = 6
   //Math.ceil 0.3 , 0.6 = 1
  // Math.round 0.3 = 0; 0.6 = 1

   document.getElementById("demo").innerHTML = 'Each person gets ' + perpeople + 'pieces of pizza';
   document.getElementById("demo2").innerHTML = 'There are ' + leftover + 'leftover pieces';

	    
})();