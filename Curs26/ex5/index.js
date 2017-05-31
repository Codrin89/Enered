(function(){
	var number1=prompt("What is the first number?");
	var num1 = parseInt(number1);
	var x = document.getElementById("number1").innerHTML =  ' ' + num1; 

	var number2=prompt("What is the second number?");
	var num2 = parseInt(number2);
	var y =document.getElementById("number2").innerHTML =  ' ' + num2; 

	document.getElementById("adunare").innerHTML =  x + "  +  " + y + " = " + (num1+num2) ; 
	document.getElementById("scadere").innerHTML =  x + "  -  " + y + " = " + (num1-num2) ;
	document.getElementById("inmultire").innerHTML =  x + "  *  " + y + " = " + (num1*num2) ;
	document.getElementById("impartire").innerHTML =  x + "  /  " + y + " = " + (num1/num2) ;

	console.log(1+'2'+3);

})();