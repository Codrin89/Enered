(function(){

	var euros = prompt('How many euros are you exchanging?')
	var exchanging = prompt('What is the exchange rate?')
	var amount  = (euros * exchanging / 100).toFixed(2);  

	document.getElementById('demo').innerHTML = 'How many euros are you exchanging?' + ' ' + euros;
	document.getElementById('demo1').innerHTML = 'What is the exchange rate?' + ' ' + exchanging;
	document.getElementById('demo2').innerHTML = euros + ' '+ 'euros at an exchange rate of' +  ' ' + 'euros at an exchange rate of' + ' ' + 'is' + ' ' + amount + ' ' +  'US Dollar.'

})();