// http://adevarul.ro/assets/adevarul.ro/MRImage/2016/01/24/56a4a3b137115986c6d789ac/978x0.jpg
(function (){
	var img = document.getElementsByClassName('img-responsive');
	//variable global
	

	for(var i = 0; i < img.length; i++) {
		img[i].addEventListener('click' , function(){
			 var img = document.getElementsByClassName('img-responsive');
			console.log('img:');
			console.log(img);
			var index;
			for(var i = 0; i < img.length; i++) {
				console.log('i:'+i);
				console.log(img[i]);
				console.log(this);
				if(img[i]==this){
					index=i;
					console.log('index:'+index);
				}
			}
			if (this.src!='http://adevarul.ro/assets/adevarul.ro/MRImage/2016/01/24/56a4a3b137115986c6d789ac/978x0.jpg') {
				console.log(this.src);
				this.setAttribute('data-src', img[index].src);
				this.src = 'http://adevarul.ro/assets/adevarul.ro/MRImage/2016/01/24/56a4a3b137115986c6d789ac/978x0.jpg';
				console.log(img[index].src);
			}else {
				this.src=this.getAttribute('data-src');
			}
				


		});
	};
	var clickCounter= document.getElementsByClassName('click-counter');
	for(var i=0; i<clickCounter.length; i++){
		clickCounter[i].addEventListener('click', function(){
			console.log(this);
			var counter = this.getElementsByClassName('counter');
			console.log(counter);
			if(counter[0].innerHTML==''){
				counter[0].innerHTML = 1;
			}else{
				counter[0].innerHTML=parseInt(counter[0].innerHTML)+1;

			}
			
		});
	}




})();