(function(){
	function boxMaker(){
		var box = document.getElementsByClassName('box');
		//window.innerWidth && window.innerHeight
		var heightSize = window.innerHeight;
		var widthtSize = window.innerWidth;
		if(heightSize > widthtSize){

			for(i = 0; i < box.length; i++){
				box[i].style.width = ((window.innerWidth -17) / 3 ) + 'px';
				box[i].style.height = ((window.innerWidth -17) / 3 ) + 'px';
			}
		}else{
			for(i = 0; i < box.length; i++){
				box[i].style.width = ((window.innerWidth ) / 3 ) + 'px';
				box[i].style.height = ((window.innerWidth) / 3 ) + 'px';
			}

		}
		if(widthtSize < 768){
				for(i = 0; i < box.length; i++){
				box[i].style.width = ((window.innerWidth -17) / 2 ) + 'px';
				box[i].style.height = ((window.innerWidth -17) / 2 ) + 'px';
			}
		}else{
			for(i = 0; i < box.length; i++){
				box[i].style.width = ((window.innerWidth ) / 2 ) + 'px';
				box[i].style.height = ((window.innerWidth) / 2 ) + 'px';
			}
		}
		if(widthtSize < 480){
				for(i = 0; i < box.length; i++){
				box[i].style.width = (window.innerWidth -17)   + 'px';
				box[i].style.height = (window.innerWidth -17)   + 'px';
			}
		
		}
	}
	boxMaker();
	

	window.addEventListener('resize', function(){
		boxMaker();
	})


})();