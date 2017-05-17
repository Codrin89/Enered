(function() {
	document.getElementsByClassName('account')[0].getElementsByClassName('btn-gol')[0].
	addEventListener('click',function(){
		var dropDown = this.parentElement.getElementsByClassName('dropdown-content')[0];

		if(dropDown.style.display =='block') {
			dropDown.style.display ='none';

		}else{


		this.parentElement.getElementsByClassName('dropdown-content')[0].style.display = 'block';
	}

	});
	var tabs = document.getElementsByClassName('tabs-step');
	for (var i = 0; i< tabs.length; i++) {


		tabs[i].addEventListener('click', function(){
		document.getElementsByClassName('active')[0].classList.remove('active');
		this.classList.add('active');
	});
	}
})();