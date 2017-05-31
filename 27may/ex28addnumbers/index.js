(function(){
   var sum=0;
   var x =prompt("Enter how many numbers do you want ti enter: ");
   while(isNaN(x)===true){
   	  x =prompt("Enter how many numbers do you want ti enter: ");
   }
   for(i=0; i<parseInt(x);i++){
   	  var number =prompt("Enter a number: ");
   	  if(isNaN(number)!=true){
   	  	sum += parseInt(number);
   	  	document.getElementsByClassName('container')[0].innerHTML+=
   	  	"Enter a number: "+number+"<br>";
   	  } else{
   	  	i--;
   	  }

   }
   document.getElementsByClassName('container')[0].innerHTML+=
   "The total is "+sum+".";
})();