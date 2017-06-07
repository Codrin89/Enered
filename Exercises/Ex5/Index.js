(function(){
var number1 = prompt('What is the first number?')
document.getElementById('first').innerHTML = 'What is the first number?' + number1;
var number2 = prompt('What is the second number?')
document.getElementById('last').innerHTML = 'What is the second number?' +  number2;
number1 = parseInt(number1);
number2 = parseInt(number2);

document.getElementById('adunare').innerHTML = number1 + '+' + number2 + '=' + (number1 + number2);
document.getElementById('scadere').innerHTML = number1 + '-' + number2 + '=' + (number1 - number2);
document.getElementById('inmultire').innerHTML = number1 + '*' + number2 + '=' + (number1 * number2);
document.getElementById('impartire').innerHTML = number1 + '/' + number2 + '=' + (number1 / number2);	
})();