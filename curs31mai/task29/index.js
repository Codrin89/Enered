(function(){

	var rate = prompt('what is the rate of return?');
	    while(isNaN(rate)=== true || rate == '0') {
	    	document.getElementsByClassName('demo')[0].innerHTML +='what is the rate of return?' + rate + '<br> Sorry. Thats not a valid input.<br>';
	    	rate = prompt('what is the rate of return?');
	}
		document.getElementsByClassName('demo')[0].innerHTML +='what is the rate of return?' + rate + '<br> It will take '+ (72 / rate) + 'years to double your initial investment';
})();