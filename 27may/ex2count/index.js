(function (){

    var string = prompt("What is the input string?");
   	document.getElementById("demo").addEventListener("keypress", myFunction());
   	function myFunction(){
         var x = string.length;
         console.log(x);
    if(x!=null && x!=0){
    	document.getElementById("demo").innerHTML =
        string + " has " + x +" characters.";
   }
    else {
  	  string = prompt("you must enter a string!");
  	  document.getElementById("demo").addEventListener("keypress", myFunction());
   	  innerHTML =
      string + " has " + x +" characters.";
   }
    };
   
    

})();