(function (){
	var right = document.getElementsByClassName('glyphicon-play');
	for(var i = 0; i < right.length; i++){
		right[i].addEventListener('click' , function() {
			if(this.getAttribute('data-click') == 'true'){
				var info = this.parentElement.parentElement.getElementsByClassName('info-text');
				for(var i = 0 ; i < info.length; i++){
					info[i].style.display = 'none';
				}
				this.setAttribute('data-click', 'false');
			}else {
				var info = this.parentElement.parentElement.getElementsByClassName('info-text');
				for(var i = 0 ; i < info.length; i++){
					info[i].style.display = 'block';
				}
			this.setAttribute('data-click' , 'true');
			}
		});
	}
})();