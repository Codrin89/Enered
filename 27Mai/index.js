(function () {
	// Intrebarea 1 si 2
	// var person = prompt("Please enter your name"); 		
		// if (person != null) {
    		// document.getElementById("hello").innerHTML ="What's is your input string?" + person;
    		// document.getElementById('p').innerHTML = person + ' has ' + person.length + ' characters ';
// };

	// Problema 3

	// var quote = prompt('What is the quote');
		// document.getElementById('1').innerHTML = "What is the quote?" + quote;
	// var who = prompt('Who said it?');
		// document.getElementById('answer').innerHTML = 'Who said it?' + who;
		// document.getElementById('done').innerHTML = who + ' says, ' + quote;

		// Problema 4

		// var noun = prompt('Enter a noun:');
			// document.getElementById('a').innerHTML = 'Enter a noun:' + noun;
		// var verb = prompt ('Enter a verb : ');
			// document.getElementById('b').innerHTML = 'Enter a verb :' + verb;
		// var adjective = prompt ('Enter an adjective:');
			// document.getElementById('c').innerHTML = 'Enter an adjective:' + adjective;
		// var	adverb = prompt ('Enter an adverb:');
			// document.getElementById('d').innerHTML = 'Enter an adverb:' + adverb;
			// document.getElementById('done').innerHTML = ' Do you ' + verb + ' your ' + adjective  + ' '+ noun + ' '+ adverb + ' ? ' + ' That is hilarious! ';	

			// Problema 5

			// var a = prompt("What is the first number?");
			// var b = prompt("What is the second number?");
			// document.getElementById('a').innerHTML = 'What is the first number?' + a;
			// document.getElementById('b').innerHTML = 'What is the second number?' + b;
			// a = parseInt(a);
			// b = parseInt(b);
			 // document.getElementById('result').innerHTML = a + ' + '  + b +' = ' +  (a + b) ;
			// document.getElementById('result1').innerHTML = a + ' - ' + b + ' = ' + (a - b) ;
			// document.getElementById('result2').innerHTML = a + ' * ' + b + ' = ' +  (a * b) ;
			// document.getElementById('result3').innerHTML = a + ' / ' + b + ' = ' +  (a / b) ;

			// Problema 6
			
			// var Age = prompt("What is your current age?");
			// var Yearsretire = prompt("At what age would you like to retire?");
			// document.getElementById('a').innerHTML = 'What is your current age?' + Age;
			// document.getElementById('b').innerHTML = 'At what age would you like to retire?' + Yearsretire;
			// document.getElementById('result').innerHTML = ' You have ' + (Yearsretire - Age)  +  'left until you can retire.';
			// document.getElementById('result1').innerHTML = 'Its 2017 , so you can retire in' + (2017 + (Yearsretire - Age)) + ' . ';

			//  Problema 7

			// var length = prompt('What is the length of the room in feet?');
			// var width = prompt('What is the width of the room in feet?');
			// document.getElementById('a').innerHTML = 'What is the length of the room in feet?' + length;
			// document.getElementById('b').innerHTML = 'What is the width of the room in feet?' + width;
			// document.getElementById('c').innerHTML = 'You entered dimensions of' + ' ' + length + ' ' + 'feet by' + ' ' + width + ' ' + 'feet.'













			// Problema 28

			// var number1 = prompt('Enter a number:');
			// var number2 = prompt('Enter a number:');
			// var number3 = prompt('Enter a number:');
			// var number4 = prompt('Enter a number:');
			// var number5 = prompt('Enter a number:');
			// document.getElementById('a').innerHTML = 'Enter a number:' + number1;
			// document.getElementById('b').innerHTML = 'Enter a number:' + number2;
			// document.getElementById('c').innerHTML = 'Enter a number:' + number3;
			// document.getElementById('d').innerHTML = 'Enter a number:' + number4;
			// document.getElementById('e').innerHTML = 'Enter a number:' + number5;
			 // number1 = parseInt(number1);
			 // number2 = parseInt(number2);
			 // number3 = parseInt(number3);
			 // number4 = parseInt(number4);
			 // number5 = parseInt(number5);
			// document.getElementById('result').innerHTML = 'The total is' + ' ' + (number1 + number2 + number3 + number4 + number5) + '.';

			// Sau

			// var sum=0
			// var x = prompt('Enter how many numbers do you want to enter : ');
			// while(isNaN(x)===true) {
			// 	x=number = prompt('Enter how many numbers do you want to enter : ');
			// }
			// for (var i = 0; i < parseInt(x); i++) {
			// 	var number = prompt('Enter a number: ');
			// 	if(isNaN(number)!=true) {
			// 		sum += parseInt(number);
			// 		document.getElementsByClassName('container')[0].innerHTML += 'Enter a number: ' + number + '<br>';
			// 	} else {
			// 		i --;
			// 	}
			// }
			//  document.getElementsByClassName('container')[0].innerHTML += 'The total is ' + sum + '.';
		

			// Problema 29

			// var rate = prompt('What is the rate of return?');
			// while (isNaN(rate) === true || rate == '0') {
			// 	document.getElementsByClassName('container'[0].innerHTML += 'What is the rate of return?' + rate + '<br> Sorry. That\'s not a valid input.');
			// 	rate = prompt('What is the rate of return?');
			// }
			// document.getElementsByClassName('container')[0].innerHTML += 'What is the rate of return?' + rate + '<br> It will take '+ (72 / rate) + ' years to double your initial investment.';


			// Problema 30
			
		// 	function generateTable(endOfLine) {
		// 		document.getElementById('table').innerHTML = '';

		// 		var row = document.createElement('div');
		// 		row.setAttribute('class' , 'row');
		// 		var box = document.createElement('div');
		// 		box.setAttribute('class' , 'box');
		// 		row.append(box);
		// 		for (i = 0 ; i < endOfLine; i++) {
		// 			var box = document.createElement('div');
		// 			box.setAttribute('class' , 'box');
		// 			var number = document.createTextNode(i);
		// 			box.append(number);
		// 			row.append(box);
		// 		}
		// 		document.getElementById('table').append(row);

		// 		for(i = 0; i < endOfLine; i++) {
		// 			var row = document.createElement('div');
		// 			row.setAttribute('class' , 'row');
		// 			var box = document.createElement('div');
		// 			box.setAttribute('class' , 'box');
		// 			var number = document.createTextNode(i);
		// 			box.append(number);
		// 			row.append(box);
		// 		for(j = 0; j < endOfLine; j++){
		// 			var box = document.createElement('div');
		// 			box.setAttribute('class' , 'box');
		// 			var number = document.createTextNode(i*j);
		// 			box.append(number);
		// 			row.append(box);
		// 		}
		// 		document.getElementById('table').append(row);
		// 	}
		// }
		// generateTable(25);


})();