//http://3.bp.blogspot.com/-AJD4O3V7AXY/Udk9rMQayPI/AAAAAAAAFPo/Sm0ncaMMDmg/s1600/vara_mare.jpg
(function() {
		var img = document.getElementsByClassName('img-responsive');
		//variables global

				

				for(var i = 0; i < img.length; i++) {
					img[i].addEventListener('click', function() {
						var img = document.getElementsByClassName('img-responsive');
						//console.log('img:');
						//console.log(img);
						var index;

						for(i = 0; i < img.length; i++) {
							console.log('key:'+i+'value');
							console.log(img[i]);
							console.log(this);
							if(img[i] == this) {
								index=i; 
								console.log('index:'+index);
							}
						} 
						console.log(this.src);
						console.log(img[index].src);
						if(this.src != 'http://3.bp.blogspot.com/-AJD4O3V7AXY/Udk9rMQayPI/AAAAAAAAFPo/Sm0ncaMMDmg/s1600/vara_mare.jpg') {
							console.log(this.src);
						console.log(img[index].src);
								this.setAttribute('data-src', img[index].src);
								this.src = 'http://3.bp.blogspot.com/-AJD4O3V7AXY/Udk9rMQayPI/AAAAAAAAFPo/Sm0ncaMMDmg/s1600/vara_mare.jpg';
						}
						else {
							this.src = this.getAttribute("data-src");

						}

						// var img = ['img1', 'img2', 'img3', 'img4'];
						// console.log(img);
						// console.log('start for loop');
						// for(var i=0; i<img.length; i++) {
						// 	console.log('pozitia:' + 1);
						// 	console.log('valoare:' + img[i]);
						// 	console.log()img[i] == 'img3');
						// 	if(img[i] == 'img3') {
						// 		console.log('valoarea este img3');
						// 	}
							
						

					});
				};


				var clickCounter = document.getElementsByClassName("click-counter");
				for(var i = 0; i < clickCounter.length; i++){
					clickCounter[i].addEventListener('click', function() {
						console.log(this);
						var counter = this.getElementsByClassName('counter');
						console.log(counter);
						if(counter[0].innerHTML == '') {
							counter[0].innerHTML = 1;
						}
						else{
							counter[0].innerHTML = parseInt(counter[0].innerHTML+1);
						}
					});
				}



})();