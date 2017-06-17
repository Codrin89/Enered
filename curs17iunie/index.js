//<div class="box">
//		<h1 class="text-center">this is a heading </h1>
//		<input type="text" class="form-control">
//		<a href="javascript:void(0)" class="btn btn-primary">do something </a>
//</div>

(function() {
	var imgArray = ['https://images-na.ssl-images-amazon.com/images/I/515goBa37GL.jpg','https://images-na.ssl-images-amazon.com/images/I/51msXMZvFXL.jpg','https://images-na.ssl-images-amazon.com/images/I/513mVB57HrL.jpg']
	function createElementsJs(elementsLength) {
		for(var i = 0 ; i < elementsLength ; i++) {
			//create div class="box"
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class', 'box');

			//create h1 class="text-center" -> this is a heading
			var headingH1 = document.createElement('h1');
			headingH1.setAttribute('class','text-center');
			var headingH1Text = document.createTextNode('this is a heading');
			headingH1.append(headingH1Text);

			//create input class="form-control" type="text"
			var input = document.createElement('input');
			input.setAttribute('class','form-control');
			input.setAttribute('type','text');

			//create anchor class="btn btn-primary" href="javascript"
			var anchorButton = document.createElement('a');
			anchorButton.setAttribute('class','btn btn-primary');
			anchorButton.setAttribute('href','javascript:void(0)');
			var anchorText = document.createTextNode('do something');
			anchorButton.append(anchorText);

			boxDiv.append(headingH1);
			boxDiv.append(input);
			boxDiv.append(anchorButton);


			document.getElementsByClassName('js-create')[0].append(boxDiv);



		}
	}

	function createElementsjQuery(elementsLength) {
		for(var i = 0 ; i < elementsLength ; i++) {
			var box = $('<div class="box"><h1 class="text-center">this is a heading </h1><input type="text" class="form-control"><a href="javascript:void(0)" class="btn btn-primary">do something </a></div>');
			document.getElementsByClassName('jquery-create')[0].append(box[0]);
		}
	}

	//<div class="boxx-img text-center">
	//	<img src=" +imgArray[i]+ " class="img-responsive img-circle">
	//</div>

	function createPanda(elementsLength) {
		for(var i = 0 ; i < elementsLength ; i++) {
			var img = $('<div class="box-img text-center"><img src="'
			+ imgArray[i] +
			 '" class="img-responsive img-circle"></div>');

			document.getElementsByClassName('custom-create')[0].append(img[0]);
		}
	}


	//<div class="boxx-img text-center">
	//	<img src="aaa" class="img-responsive img-circle">
	//</div>

	function createPandaJs(elementsLength) {
		for(var i = 0 ; i < elementsLength ; i++) {
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class','box-img text-center');

			var img = document.createElement('img');
			img.setAttribute('class', 'img-responsive img-circle');
			img.setAttribute('src', imgArray[i]);

			boxDiv.append(img);
			document.getElementsByClassName('custom-create')[0].append(boxDiv);
		}
	}


	createElementsJs(3);
	createElementsjQuery(3);
	createPanda(3);
	createPandaJs(3);



})();