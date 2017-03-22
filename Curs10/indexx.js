(function() {
	var nume = 3;
	var nume2 = 5;
	var nume3 = 'something';
	document.getElementById('button').addEventListener('click', function() {
		clickValidator(this);
	});

	function clickValidator(button) {
		var inputValue =document.getElementById('input-data');
		console.log(inputValue.value);
	}
	document.getElementsByTagName('body')[0].addEventListener('keypress', function(event){
		console.log(event.keyCode);
		if(event.keyCode == 13) {
			alert('You have pressed Enter!!!')
		} else {
			if(event.keyCode == 32) {
				alert('You have pressed space!!!');
			}
		}
	});
	var rezultat = nume + nume2 + nume3;
	console.log(rezultat);
})();