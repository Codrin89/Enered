(function() {
					// Problema2
	// var sir = prompt('What is the input string?');
	// document.getElementById('demo').innerHTML = 'What is your input string?' + sir;	
	// document.getElementById('demo2').innerHTML = sir + ' has ' + sir.length + ' char';
	// 				Problema 3
	// var say = prompt('What is the quote?');
	// var autor = prompt('Who say it')
	// document.getElementById('demo').innerHTML ='What is the quote?' + ' ' + say;
	// document.getElementById('demo2').innerHTML = 'Who say it : ' + '' + autor;
	// document.getElementById('demo3').innerHTML = autor + ' ' + 'says : "' + say +'"';
					//Problema 4
	// var name = prompt('dog');
	// var verb = prompt('walk');
	// var adj = prompt('blue');
	// var adverb = prompt('quickly');
	// document.getElementById('demo1').innerHTML ='Enter ur` name : ' + name;
	// document.getElementById('demo2').innerHTML ='Enter ur` verb : ' + verb;
	// document.getElementById('demo3').innerHTML ='Enter ur` adjective : ' + adj;
	// document.getElementById('demo4').innerHTML ='Enter ur` adverb : ' + adverb;
	// document.getElementById('demo5').innerHTML ='Do you ' + verb + ' your ' + ' ' + adj + ' ' + name + ' ' + adverb + '?'+ 'That`s hilarious!';
				//Problema 5
	// var first = prompt('What is the first number? : ');
	// var second = prompt('What is the second number? : ');
	// var z = parseInt(first);
	// var y = parseInt(second);
	// document.getElementById('demo1').innerHTML = z + y;
	// document.getElementById('demo2').innerHTML = z - y;
	// document.getElementById('demo3').innerHTML = z * y;
	// document.getElementById('demo4').innerHTML = z / y;
				//Problema 6
	// var varsta = prompt('What is your current age?');
	// var pensie = prompt('At what age would you like to retire?');
	// var z = parseInt(varsta);
	// var y = parseInt(pensie);
	// document.getElementById('demo1').innerHTML = 'You have ' + ( y - z ) + 'years left until you can retire.';
	// document.getElementById('demo2').innerHTML = 'It`s 2017, so you can retire in ' + (2017 + (y-z)); 
	// 			Problema 7
	// var lungime = prompt('What is the length of the room in feet?');
	// var latime = prompt('What is the width of the room in feet?');
	// var z = parseInt(lungime);
	// var y = parseInt(latime);
	// var rez = 0.09290304;
	// document.getElementById('demo1').innerHTML = 'You entered dimensions of '  + lungime + 'feet by ' + latime + 'feet.';
	// document.getElementById('demo2').innerHTML = 'This areea is';
	// document.getElementById('demo3').innerHTML = z * y + ' ' + ' sqare feet';
	// document.getElementById('demo4').innerHTML = (z * y)  * rez  + ' ' + 'square meters';  
				//Problema 8
	// var people = prompt('How many people?');
	// var pizza = prompt('How many pizzas do you have ?');
	// var z = parseInt(people);
	// var y = parseInt(pizza);
	// var x = 8;
	// var p = Math.floor((x*y)/z);
	// document.getElementById('demo1').innerHTML = z + ' ' + 'people with ' + y +' '+ 'pizzas';
	// document.getElementById('demo2').innerHTML = 'Each person gets' + ' ' + p + ' '+ 'pieces of pizza.';
	// document.getElementById('demo3').innerHTML = 'There are ' + ((y*x)-(p*z)) + ' ' + 'leftover pieces';
				//Problema 9
	// var lungime = prompt('how long is room');
	// var latime = prompt('how width is room')
	// var p = parseInt(lungime);
	// var o = parseInt(latime);
	// var sf = (p * o);
	// var x = Math.ceil(sf/350);
	// document.getElementById('demo2').innerHTML = 'You will need to purchase' + ' ' + x + 'gallons of paint to cover' + ' ' + sf + ' ' + 'square feet.';
				//Problema 10
	// var item1 = prompt('Enter the price of item 1');
	// var item1q =prompt('Enter the quantity of item 1') 
	// var item2 = prompt('Enter the price of item 2');
	// var item2q =prompt('Enter the quantity of item 2') 
	// var item3 = prompt('Enter the price of item 3');
	// var item3q =prompt('Enter the quantity of item 3') 
	// var i1 = parseInt(item1);
	// var iq1 = parseInt(item1q);
	// var i2 = parseInt(item2);
	// var iq2 = parseInt(item2q);
	// var i3 = parseInt(item3);
	// var iq3 = parseInt(item3q);
	// var subtotal = ( i1 + iq1 + i2 + iq2 + i3 + iq3);
	// var tax = (subtotal * 0.055);
	// var total = (subtotal + tax );
	// document.getElementById('demo1').innerHTML = subtotal;
	// document.getElementById('demo2').innerHTML = tax;
	// document.getElementById('demo3').innerHTML = total;
				//problema 28
	// var sum = 0;
	// var x = prompt('Enter how many numbers do you want to enter : ');
	// while(isNaN(x)===true){
	// 	x = prompt('Enter how many numbers do you want to enter : ');
	// }
	// for (var i = 0 ; i < parseInt(x) ; i++) {
	// 	var number = prompt('Enter a number: ');
	// 	if(isNaN(number)!=true){
	// 		sum += parseInt(number);
	// 		document.getElementsByClassName('container')[0].innerHTML += 'Enter a number:  ' + number + "<br>";
	// }else{
	// 	i--;
	// }			
	// 	// sum += parseInt(number);
	// 	// document.getElementsByClassName('container')[0].innerHTML += 'Enter a number:  ' + number + "<br>";
	// }
	
	// 	 document.getElementsByClassName('container')[0].innerHTML += 'The total is:  ' + sum + ' . ';
	
		//problema 29
	// var rate = prompt('What is the rate of return?');
	// while(isNaN(rate) === true || rate == '0'){
	// 	document.getElementsByClassName('container')[0].innerHTML += 'What is the rate of return?' + rate + '<br> Sorry. That`s not a valid input.';
	// 	rate = prompt('What is the rate of return?');
	// }

	// document.getElementsByClassName('container')[0].innerHTML += 'What is the rate of return?' + rate;
	// document.getElementsByClassName('container')[0].innerHTML += '<br>It will take' + ' ' + (72/rate) + ' ' + 'years to double your initial investment.'
			// problema 30
function generateTable(endOfLine){
	document.getElementById('table').innerHTML = '';
	var row = document.createElement('div');
	row.setAttribute('class', 'row');
	var box = document.createElement('div');
	box.setAttribute('class', 'box');
	row.append(box);
	for(var i = 0 ; i < endOfLine; i++){
		var box = document.createElement('div');
		box.setAttribute('class', 'box');
		var number = document.createTextNode(i);
		box.append(number);
		row.append(box);
	}
	document.getElementById('table').append(row);
	for(var i = 0 ; i < endOfLine; i++){
		var row = document.createElement('div');
		row.setAttribute('class', 'row');
		var box = document.createElement('div');
		box.setAttribute('class', 'box');
		var number = document.createTextNode(i);
		box.append(number);
		row.append(box);
		for(j = 0 ; j < endOfLine ; j++){
			var box = document.createElement('div');
			box.setAttribute('class', 'box');
			var number = document.createTextNode( i * j);
			box.append(number);
			row.append(box);
		}
		document.getElementById('table').append(row);
	}			


}
	generateTable(16);
	document.getElementById('select').addEventListener('change', function(){
		generateTable(this.value);
	})
})();