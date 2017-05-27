(function(){
   var quote = prompt("What is the quote?");
   var autor = prompt("Who said it?");
   if (quote,autor != null && quote,autor != 0) {
    document.getElementById("demo").innerHTML =
    autor + ' says, ' + '"'+quote+'"';
}

})();