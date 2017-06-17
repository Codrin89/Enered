



(function(){
	var imgArray=['https://s-media-cache-ak0.pinimg.com/736x/00/3b/bf/003bbfdb363c63a79be4628735c786ca.jpg',
		'https://s-media-cache-ak0.pinimg.com/originals/e2/ba/a7/e2baa7c74c3b3b1d1249b800f7d6a142.jpg',
		'https://i1.sndcdn.com/artworks-000179308245-paabn9-t500x500.jpg'];
	function createElementsJs(elementsLength){

		for(var i=0; i<elementsLength; i++){
			//create div class="box"
			var boxDiv =document.createElement('div');
			boxDiv.setAttribute('class','box');
			//create h1
			var headingH1 = document.createElement('h1');
			headingH1.setAttribute('class','text-center');
			var headingH1Text= document.createTextNode('This is a ..');
			headingH1.append(headingH1Text);

			//input
			var input =document.createElement('input');
			input.setAttribute('class' , 'form-control');
			input.setAttribute('type' ,'text');

			//create anchor  class=btn btn-primary 
			var anchorButton =document.createElement('a');
			anchorButton.setAttribute('class','btn btn-primary');
			anchorButton.setAttribute('href','javascript:void(0)');
			var anchorText = document.createTextNode('Do something');
			anchorButton.append(anchorText);

			boxDiv.append(headingH1);
			boxDiv.append(input);
			boxDiv.append(anchorButton);

			document.getElementsByClassName('js-create')[0].append(boxDiv);
		}
	}
	//JQUERY 
	function createElementsjQuery(elementsLength){
		for(var i=0;i<elementsLength;i++){
			var box= $('<div class="box"><h1 class="text-center">This is a heading</h1>	<input type="text" name="#" class="form-control"><a href="javascript:void(0)" class="btn btn-primary">Do something</a>	</div>');
			document.getElementsByClassName('jquery-create')[0].append(box[0]);
		}
	}

	
	//create images JQUERY
	function createPanda(elementsLength){
		for(var i=0;i<elementsLength;i++){
			var img = $('<div class="box-img text-center"><img src="'+ imgArray[i] +'" class="img-responsive img-circle">	</div>')
			document.getElementsByClassName('custom-create')[0].append(img[0]);
		}
	}

    //create images JS
	function createPandaJS(elementsLength){
		for(var i=0; i<elementsLength; i++){
			//create div class="box"
			var boxDiv =document.createElement('div');
			boxDiv.setAttribute('class','box-img text-center');
			//create h1
			var img = document.createElement('img');
			img.setAttribute('class','img-responsive img-circle');
			img.setAttribute('src',imgArray[i]);

			//input
			var input =document.createElement('input');
			input.setAttribute('class' , 'form-control');
			input.setAttribute('type' ,'text');

			boxDiv.append(img);
			document.getElementsByClassName('custom-create')[0].append(boxDiv);
		}
	}



	createElementsJs(3);
	createElementsjQuery(3);
	createPanda(3);
	createPandaJS(3);
})();
