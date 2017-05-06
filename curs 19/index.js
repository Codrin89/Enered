//http://science-all.com/images/images/images-12.jpg
(function(){
	//variables global
	var img = document.getElementsByClassName("img-responsive");//clasa e img-responsive;
	
    
    for(var i=0; i<img.length; i++){//i=0 pleci de la prima valoare; i++ adauga plus 1 la valoare;
         img[i].addEventListener('click', function(){ //img[i] se raporteaza la toate img;+click;
         	var img = document.getElementsByClassName("img-responsive");//toate img le ia
         	console.log('img:');
         	console.log(img);

         	var index;//oricare denumire dupa var nu conteaza;
         	for(var i=0; i<img.length; i++){
         		console.log('iterator:'+i);//'i:' asta e text;  + concateneaza
         		console.log(img[i]);
         		console.log(this);
         		if(img[i]==this){ //elementul pe care dai click e this;imaginea respectiva(this) se compara cu restul;
         			index=i;//compara->rezultatul
         		    console.log('index:'+index);	
         		}
         	}

         	if(this.src!='http://science-all.com/images/images/images-12.jpg'){//!= imaginea"click" diferit de ...";!= daca nu este egal;
               console.log(this.src);
         	  
               this.setAttribute('data-src',img[index].src);//img[index.src imaginea pe care dai click] 'data-src' face un atribut nou;setAttribute seteaza atributul respectiv;
               this.src='http://science-all.com/images/images/images-12.jpg'; //setez src respectiv; suprascriu linkul
         	   console.log(this.src);
         	}else{
         		this.src=this.getAttribute("data-src");
         		}



         		/*var img = ['img1','img2','img3','img4'];
         		console.log(img);
         		console.log('start for loop');
         		for(var i = 0 ; i < img.length ; i++){
         	console.log('pozitia:'+ i);
         	console.log('valoare:'+ img[i]);
         	console.log(img[i] == 'img3');//img[i]->img[0]->img[1]se compara cu img[3];
                 if(img[i] == 'img3'){
                 	console.log('valoarea este img3');
                 }
         	}*/
            
         });
    
    };
    var clickCounter= document.getElementsByClassName("click-counter");
    for(var i=0;i<clickCounter.length;i++){
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