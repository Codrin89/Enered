(function() {


	var length = prompt('What is the length of the room in feet?');
	var width = prompt('What is the width of the room in feet?');

	document.getElementById('demo').innerHTML = 'What is the width of the room in feet?' + length;
	document.getElementById('demo2').innerHTML = 'What is the width of the room in feet?' + width;

	document.getElementById('demo3').innerHTML = 'You' + ' ' + 'entered' + ' ' + 'dimensions' + ' ' + 'of' + ' ' + length + ' ' + 'feet' + ' ' + 'by' + ' ' + width + ' ' + 'feet';


	var x = parseInt(length);
	var y = parseInt(width);
	
	document.getElementById('demo4').innerHTML = 'The' + ' ' + 'area' + ' ' + 'is'
	document.getElementById('demo5').innerHTML = (x * y) + ' ' + 'square' + ' ' + 'feet' + '.' 
	document.getElementById('demo6').innerHTML = (x * y) * 0.09290304;


	





})();