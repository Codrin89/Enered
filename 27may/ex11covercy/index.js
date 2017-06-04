(function(){

   var euros = prompt("How many euros are you exchanging?");
   while(isNaN(euros)===true){
    	euros = prompt("How many euros are you exchanging?");
    }
   var rate = prompt("What is the exchange rate?");
    while (isNaN(rate)===true) {
    	rate = prompt("What is the exchange rate?");
    }  

  var dollars = (euros * rate/100).toFixed(2);

  document.getElementById("container").innerHTML=
  "How many euros are you exchanging? " + euros + "<br>"+
  "What is the exchange rate? " + rate + "<br>"+
  euros +  " euros at an exchange rate of "+ rate +" is " + dollars+
  " U.S. dollars.";
  
})();
