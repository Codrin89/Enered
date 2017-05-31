(function(){
	var rate =prompt("What is the rate of return? ");
	while(isNaN(rate)===true || rate=='0'){
		document.getElementsByClassName('container')[0].innerHTML += "What is the rate of return? "  + rate +"<br> Sorry. That\'s not a valid input. <br>";
		rate =prompt("What is the rate of return? ");
	};
	document.getElementsByClassName('container')[0].innerHTML += "What is the rate of return?  " + rate + "<br>" + " It will take " + (72/rate) + " years to double your initial investment.";



})();