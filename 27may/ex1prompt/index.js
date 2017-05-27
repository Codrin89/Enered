(function(){
   var person = prompt("What is your name?");
   if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + ", nice to meet you!";
}

})();