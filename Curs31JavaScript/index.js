// <div class="box">
// 				<h1 class="text-center">This is a heading</h1>
// 				<input type="text" name="" class="form-control">
// 				<a href="javascript:void(0)" class="btn btn-primary">Do something</a>
// 			</div>


(function(){
	var imgArray = ['http://www.spotlightfirst.com/wp-content/uploads/2016/04/tim.png', 'https://i1.sndcdn.com/artworks-000164158474-g448fs-t500x500.jpg', 'https://cdn.shopify.com/s/files/1/0805/4285/products/Portable_animal_panda_speaker_wireless_blutooth_sound.jpg?v=1491216259'];
	function createElementJs(elementsLength){
		for (var i = 0 ; i < elementsLength ; i++){
			//create div class="box"
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class', 'box');
			//create h1 class="text-center" -> This is a heading
			var headingH1 = document.createElement('h1')
			headingH1 = document.createElement('class', 'text-center');
			var headingH1Text = document.createTextNode('This is a heading');
			headingH1.append(headingH1Text);
			//create input class="form-control" type="text"
			var input = document.createElement('input');
			input.setAttribute('class','form-control');
			input.setAttribute('type', 'text');
			//create anchor class="btn btn-primary" href="javascript:void(0)" -> Do something
			var anchorButton = document.createElement('a');
			anchorButton.setAttribute('class','btn btn-primary');
			anchorButton.setAttribute('href', 'javascript:void(0)');
			var anchorText = document.createTextNode('Do something');
			anchorButton.append(anchorText);

			boxDiv.append(headingH1);
			boxDiv.append(input);
			boxDiv.append(anchorButton);

			document.getElementsByClassName('js-create')[0].append(boxDiv);
		}
	}

	function createElementjQuery(elementsLength) {
		for(var i = 0 ; i < elementsLength ; i++){
			var box = $('<div class="box"><h1 class="text-center">This is a heading</h1><input type="text" name="" class="form-control"><a href="javascript:void(0)" class="btn btn-primary">Do something</a></div>');
			document.getElementsByClassName('jquery-create')[0].append(box[0]);
		}
	}
// <div class="box-img text-center">
// 	<img src="panda.jpg" class="img-responsive img-circle">
// </div>
	function createPandaJs(elementsLength) {
		//create jq
		for(var i = 0 ; i < elementsLength ; i++){
			var img = $('<div class="box-img text-center"><img src="' + imgArray[i] + '" class="img-responsive img-circle"></div>');
			document.getElementsByClassName('custom-create')[0].append(img[0]);
		}
	}


	function createPanda(elementsLength) {
		for(var i = 0 ; i < elementsLength ; i++){
			//js simplu create
			var imgBox = document.createElement('div');
			imgBox.setAttribute('class', 'box-img text-center');
			var imgPic = document.createElement('img');
			imgPic.setAttribute('class', 'img-responsive img-circle');
			imgPic.setAttribute('src', imgArray[i]);
			imgBox.append(imgPic);
			document.getElementsByClassName('custom-create')[0].append(imgBox);


		}
	}


	createElementJs(3);
	createElementjQuery(3);
	createPanda(3);
	createPandaJs(3);






})();