(function(){

	var questions = 4;
	var questionsLeft = '[ '+ questions +' questionsLeft]';
	var noun = prompt('Enter a noun' + questionsLeft);
	document.getElementById('substantiv').innerHTML = "Enter a noun: " + noun;
	questions -= 1;
	questionsLeft = '[ '+ questions +' questionsLeft]';
	var verb = prompt('Enter a verb' + questionsLeft);
	document.getElementById('verb').innerHTML = 'Enter a verb:' + verb;
	questions -= 1;
	questionsLeft = '[ '+ questions +' questionsLeft]';
	var adjective = prompt('Enter an adjective' + questionsLeft);
	document.getElementById('adjective').innerHTML = "Enter an adjective:" + adjective
	questions -= 1;
	questionsLeft = '[ '+ questions +' questionsLeft]';
	var adverb = prompt('Enter an adverb' + questionsLeft);
	document.getElementById('adverb').innerHTML = 'Enter an adverb:' + adverb
	questions -= 1;
	document.getElementById('result').innerHTML = 'Do you ' + verb + ' your '  + adjective +' '+ noun +' '+ adverb +' ?' + 'That is hilarious' ;
	 



})();
