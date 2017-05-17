(function(){
	var img = document.getElementsByClassName("img-responsive");
	for(var i=0;i<img.length;i++){

		img[i].addEventListener('click',function(){

            var img=document.getElementsByClassName("img-responsive");
            var index;
            for(var i=0;i<img.length;i++){
				if(img[i]==this){
					index=i;
				}
        	}

        	console.log(this.src);
			 if(this.src !== 'Tulips.jpg'){
			 	this.setAttribute('data-src',img[index].src);
			 	this.src = 'Tulips.jpg';
			 }else{
			 	this.src = this.getAttribute("data-src");
			 }


		});
	};
})();