(function(){
  var noun = prompt("Enter a noun: ");
  var verb = prompt("Enter a verb: ");
  var adjective = prompt("Enter an adjective: ");
  var adverb = prompt("Enter an adverb: ");
  

  document.getElementById("demo").innerHTML =
    "Do you " + verb + " your " + adjective+" "+ noun+" " +adverb+"? That's hilarious!";

})();