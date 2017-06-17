//<div class="box">
//<h1 class="text-center">This is a heading</h1>
//<input type="text" class="form-control">
//<a href="javascript:void(0)" class="btn btn-primary">Do something</a>
//</div>
(function(){
	var imgArray = ['http://weuponit.com/wp-content/uploads/Lil-Kim-Ft-Maino-%E2%80%93-Panda-Freestyle.jpg', 'https://ae01.alicdn.com/kf/HTB1LulVQXXXXXcGXpXXq6xXFXXXG/Classic-Film-Black-and-White-Funny-font-b-Panda-b-font-font-b-Mask-b-font.jpg', 'http://www.spotlightfirst.com/wp-content/uploads/2016/04/tim.png'];
	function createElementsJs(elementsLength) {
		for(var i=0 ; i < elementsLength ; i++){    //crearea functiei baza
			var boxDiv = document.createElement('div'); //create div class="box"
			boxDiv.setAttribute('class' , 'box'); //setarea atributelor clasei!
			//create h1 class="text-center" -> text-center
			var headingH1 = document.createElement('h1'); //createElement-creeaza orice element
			headingH1.setAttribute('class', 'text-center');
			var headingH1Text = document.createTextNode('This is a heading');
			headingH1.append(headingH1Text);
			//create input class="form-control" type="text"
			var input = document.createElement('input');
			input.setAttribute('class' , 'form-control');
			input.setAttribute('type' , 'text');
			//create anchor class="btn btn-primary" href="javascript":
			var anchorButton = document.createElement('a');  //N.B: Atentie la scrierea corecta var si atribute!
			anchorButton.setAttribute('class', ' btn btn-primary');
			anchorButton.setAttribute('href' , 'javascript:void(0');
			var anchorText = document.createTextNode('Do something');
			anchorButton.append(anchorText);

			boxDiv.append(headingH1);
			boxDiv.append(input);
			boxDiv.append(anchorButton);

			document.getElementsByClassName('js-create')[0].append(boxDiv); //e un array(colectie de date) ii spunem sa se duca la pozitia 0;
		}
	}
	function createElementsjQuery(elementsLength){
		for(var i=0 ; i < elementsLength ; i++){
		var box = $('<div class= "box"> <h1 class="text-center">This is a heading</h1> <input type="text" class="form-control"> <a href="javascript:void(0)" class="btn btn-primary">Do something</a></div> ');
		document.getElementsByClassName('jquery-create')[0].append(box[0]); //box[0]-creeaza un array care are pozitia 0.

		}
	}
	//<div class="boxDiv">
	//<img src="" class="img-responsive img-circle">
	//</div>
	function createPandaJs(elementsLength){
		for(var i=0 ; i < elementsLength ; i++){
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class','box-img text-center');
			var img = document.createElement('img');
			img.setAttribute('class', 'img-responsive img-circle');
			img.setAttribute('src', imgArray[i]);

			boxDiv.append(img);
			document.getElementsByClassName('custom-create')[0].append(boxDiv);
		}
	}
	//<div class="box-img">
	//<img src="http://www.spotlightfirst.com/wp-content/uploads/2016/04/tim.png" class="img-responsive img-circle">
	//</div>
	function createPanda(elementsLength) {
		for(var i=0 ; i < elementsLength ; i++){
		var img = $('<div class= "box-img text-center"><img src="' + imgArray[i] + '" class="img-responsive img-circle"></div>');
		document.getElementsByClassName('custom-create')[0].append(img[0]); 
		}
	}

	createElementsJs(3);
	createElementsjQuery(3);
	createPanda(3);
	createPandaJs(3);
})();