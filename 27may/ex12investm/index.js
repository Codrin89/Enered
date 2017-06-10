(function(){
   var principal = prompt("Enter the principal ammount: ");
     while(isNaN(principal)===true){
    	principal = prompt("Enter the principal ammount: ");
     }
   var rate = prompt("Enter the rate of interest as a percentage: ");
   while(isNaN(rate)===true){
    	rate = prompt("Enter the rate of interest as a percentage: ");
    }
   var years = prompt("Enter the number of years: ");
    while (isNaN(years)===true) {
    	years = prompt("Enter the number of years: ");
    }

   document.getElementById("demo").innerHTML=
  "Enter the principal: " + principal + "<br>" +  
  "Enter the rate of interest: "+ rate +"<br>"+
  "Enter the number of years: "+ years +"<br>";
  
  for(var i=1;i <= years;i++){
  var interest = principal * (1 + (rate / 100) * i);
  

  document.getElementById("demo").innerHTML+=
  "After " +i+" years at " + rate + "%, the investment will be worth $"+
  Math.ceil(interest) + "." + "<br>";
  }
 


 
})();
