(function(){
   var rate = prompt('What is the rate of return?')
   while(isNaN(rate)===true){
      document.getElementsByClassName('container')[0].innerHTML+=
         "What is the rate of return?"+rate+ "<br>"+
         "Sorry. That's not a valid input." + "<br>";
        rate =prompt("Enter what is the rate of return: ");
    }
    while(rate=='0'){
      document.getElementsByClassName('container')[0].innerHTML+=
         "What is the rate of return?"+rate+ "<br>"+
         "Sorry. You cannot enter 0." + "<br>";
        rate =prompt("Enter what is the rate of return: ");
    }
    var total = 72/parseInt(rate);
    document.getElementsByClassName('container')[0].innerHTML+=
    "What is the rate of return?"+rate+ "<br>"+
   "It will take "+total+" years to double your initial investment.";


})();