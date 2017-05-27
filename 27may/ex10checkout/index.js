(function(number){

   var firstprice = prompt("Enter the price of item 1:");
   while(isNaN(firstprice)===true){
    	firstprice = prompt("Enter the price of item 1:");
    }
   var firstquantity = prompt("Enter the quantity of item 1:");
    while (isNaN(firstquantity)===true) {
    	firstquantity = prompt("Enter the quantity of item 1:");
    }

    var secondprice = prompt("Enter the price of item 2:");
   while(isNaN(secondprice)===true){
      secondprice = prompt("Enter the price of item 2:");
    }
   var secondquantity = prompt("Enter the quantity of item 2:");
    while (isNaN(secondquantity)===true) {
      secondquantity = prompt("Enter the quantity of item 2:");
    }

    var thirdprice = prompt("Enter the price of item 3:");
   while(isNaN(thirdprice)===true){
      thirdprice = prompt("Enter the price of item 3:");
    }
   var thirdquantity = prompt("Enter the quantity of item 3:");
    while (isNaN(thirdquantity)===true) {
      thirdquantity = prompt("Enter the quantity of item 3:");
    }
  

  var subtotal = (parseInt(firstprice) * parseInt(firstquantity)) + (parseInt(secondprice) * parseInt(secondquantity)) + (parseInt(thirdprice) * parseInt(thirdquantity));
  var tax = subtotal * (5.5/100);
  var total = subtotal + tax;

  document.getElementById("demo").innerHTML=
  "You bougth: " + firstquantity +  " quantity of item 1 at a price of "+ firstprice +" each;" + "<br>"+
  secondquantity +  " quantity of item 2 at a price of "+ secondprice +" each;" + "<br>"+
  thirdquantity +  " quantity of item 3 at a price of "+ thirdprice +" each;" + "<br>"+
  "Subtotal: $" + subtotal+ "<br>"+
  "Tax: $" + tax+ "<br>"+
  "Total: $" + total;
  
})();


