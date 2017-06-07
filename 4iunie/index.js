(function(){

	function boxMaker(){
		var box = document.getElementsByClassName('box');
		//window.innerWidth && window.innerHeight
		var heightSize = window.innerHeight;
		var widthSize = window.innerWidth;
				if(heightSize < widthSize) {
			for(var i = 0; i < box.length; i++) {

			box[i].style.width = ((window.innerWidth - 17 ) / 3) + 'px';
			box[i].style.height = ((window.innerWidth - 17) / 3) + 'px';
			}

		} else {
			for(var i = 0; i < box.length; i++) {

			box[i].style.width = ((window.innerWidth) / 3) + 'px';
			box[i].style.height = ((window.innerWidth) / 3) + 'px';
			}
		}
		if(widthSize < 768) {
			for(var i = 0; i < box.length; i++) {

			box[i].style.width = ((window.innerWidth - 17 ) / 2) + 'px';
			box[i].style.height = ((window.innerWidth - 17) / 2) + 'px';
			} 
		}
			if(widthSize < 480) {
				for(var i = 0; i < box.length; i++) {
					box[i].style.width = ((window.innerWidth) - 17) + 'px';
					box[i].style.height = ((window.innerWidth) - 17) + 'px';
			}
		}
	
		
	}

	boxMaker();

	window.addEventListener('resize', function(){
		boxMaker();
	})

})();