(function(number){
   var x = prompt("What is the first number?");
   while(isNaN(x)===true){
    	x = prompt("Insert the first number?");
    }
   var y = prompt("What is the second number?");
    while (isNaN(y)===true) {
    	y = prompt("Insert the second number?");
    }


   var sum = parseInt(x) + parseInt(y);
   var dif= parseInt(x) - parseInt(y);
   var prod= parseInt(x) * parseInt(y);
   var quot= parseInt(x) / parseInt(y);

   document.getElementById("demo").innerHTML=
   x + " + " + y + " = "+ sum + "<br>" +
   x + " - " + y + " = "+ dif + "<br>" +
   x + " * " + y + " = "+ prod + "<br>" +
   x + " / " + y + " = "+ quot;

})();