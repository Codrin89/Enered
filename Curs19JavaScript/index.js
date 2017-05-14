//img1.jpg
(function(){

	var img = document.getElementsByClassName('img-responsive');
	





	for(var i = 0 ; i < img.length ; i++){
		img[i].addEventListener('click', function(){
			var img = document.getElementsByClassName('img-responsive');
			//console.log('img:');
			//console.log(img);
			var index;
			for(var i = 0 ; i < img.length ; i++){
				//console.log('i:'+i);
				//console.log(img[i]);
				//console.log(this);
				if(img[i] == this){
					index = i;
					//console.log('index:'+index);
				}
			}
			//console.log(this.src);
			
			//console.log(this.src!= 'https://media.licdn.com/media/AAEAAQAAAAAAAANbAAAAJDE5NjBkNDk1LTY3ZGQtNDA0NS04YTJiLTdkNmU3NjZiNjI3Mg.png');
			if(this.src !== 'https://media.licdn.com/media/AAEAAQAAAAAAAANbAAAAJDE5NjBkNDk1LTY3ZGQtNDA0NS04YTJiLTdkNmU3NjZiNjI3Mg.png'){
				this.setAttribute('data-src', img[index].src);
				this.src = 'https://media.licdn.com/media/AAEAAQAAAAAAAANbAAAAJDE5NjBkNDk1LTY3ZGQtNDA0NS04YTJiLTdkNmU3NjZiNjI3Mg.png';
				//console.log(this.src);
			}else{
				this.src = this.getAttribute('data-src');
			}
		
			

			
			
		});
	};

	var clickCounter = document.getElementsByClassName('click-counter');
	for(var i = 0; i < clickCounter.length; i++){
		clickCounter[i].addEventListener('click', function(){
			console.log(this);
			var counter = this.getElementsByClassName('counter');
			console.log(counter);
			if(counter[0].innerHtml == ''){
				counter[0].innerHtml = 1;
			}else{
				counter[0].innerHtml = parseInt(counter[0].innerHtml) + 1;

			}

		});
	}





})();