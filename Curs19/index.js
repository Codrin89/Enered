//https://img.clipartfest.com/81df69d6974a76d0feb7d519943daf99_cartoon-cats-on-pinterest-clipart-of-dog-cat-png_600-600.png

(function(){

	var img= document.getElementsByClassName("img-responsive");
	// var arraySrc= [];
	// for(var i=0; i<img.length; i++){
	// 	arraySrc.push(img[i].src);

	// };
	// console.log(arraySrc);


	for(var i=0; i<img.length;i++){
		img[i].addEventListener('click',function(){
			var img= document.getElementsByClassName("img-responsive");
			console.log('MESAJ img:')
			console.log(img);
			var index;
			for(var i=0; i<img.length; i++){
				console.log('iterator: '+i);
				console.log(img[i]);
				console.log(this);
				if(img[i]==this){
					index=i;
					console.log('If Index:'+index);
				}
			}
			
			if(this.src!='https://img.clipartfest.com/81df69d6974a76d0feb7d519943daf99_cartoon-cats-on-pinterest-clipart-of-dog-cat-png_600-600.png'){
				console.log(this.src);
				
				this.setAttribute('data-src',img[index].src);
				this.src='https://img.clipartfest.com/81df69d6974a76d0feb7d519943daf99_cartoon-cats-on-pinterest-clipart-of-dog-cat-png_600-600.png';
				console.log(img[index].src);
			}else{
				this.src=this.getAttribute('data-src');
			}


			// var img =['img1', 'img2', 'img3', 'img4'];
			// console.log(img);
			// console.log('start for loop');
			// for(var i=0 ; i<img.length;i++){
			// 	console.log('pozitia: '+i);
			// 	console.log('valoare: '+img[i]);
			// 	console.log(img[i]=='img3');
			// 	if(img[i]== 'img3'){
			// 		console.log('valoarea este img3');
			// 	}
			// }
			
		});
	};




	var clickCounter = document.getElementsByClassName("click-counter");
	for(var i=0; i<clickCounter.length;i++){
		clickCounter[i].addEventListener('click',function(){
			 console.log(this);
			 var counter=this.getElementsByClassName('counter');
			 console.log(counter);
			 if(counter[0].innerHTML == ''){
			 	counter[0].innerHTML = 1;
			 }else{
			 	counter[0].innerHTML=parseInt(counter[0].innerHTML)+1;
			 }
		});
	}
})();