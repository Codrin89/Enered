

(function(){
	var imgArray = ['img1.png','img2.jpg','img1.png'];
   function createElementsJs(elementsLength) {
   	  for (var i = 0; i < elementsLength; i++) {
   	  	//create div class="box"
   	  	var boxDiv = document.createElement('div');
   	  	boxDiv.setAttribute('class','box');
   	  	//create h1 class ="text-center " -> This is a heading
   	  	var headingH1 = document.createElement('h1');
   	  	headingH1.setAttribute('class','text-center');
   	  	var headingH1Text = document.createTextNode('This is heading');
   	  	headingH1.append(headingH1Text);
   	  	//create input class="form-control" type="text"
   	  	var input = document.createElement('input');
   	  	input.setAttribute('class','form-control');
   	  	input.setAttribute('type','text');
   	  	//create anchor class="btn btn-primary" -> Do something
   	  	var anchorButton = document.createElement('a');
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

  function createElementsjQuerry(elementsLength){
  	  for(var i=0; i<elementsLength; i++){
  	  	var box = $('<div class="box"><h1 class="text-center">This is heading</h1><input type="text" class="form-control"><a href="javascript:void(0)" class="btn btn-primary">Do something</a></div>');
  	  	document.getElementsByClassName('jquery-create')[0].append(box[0]);

  	  }
  }

  function createPigeon(elementsLength){
  	    for(var i=0; i<elementsLength; i++){
  	  	var img = $('<div class="box-img text-center"><img src="'+imgArray[i]+'" class="img-responsive img-circle"></div>');
  	  	document.getElementsByClassName('custom-create')[0].append(img[0]);
  	  }
  }
// <div class="box-img text-center">
//     		<img src="" class="img-resposive img-circle">
//</div>
  function createPigeonJs(elementsLength){
  	    for(var i=0; i<elementsLength; i++){
  	  	  var boxDiv = document.createElement('div');
   	  	  boxDiv.setAttribute('class','box-img text-center');

   	  	  var img = document.createElement('img');
   	  	  img.setAttribute('class','img-responsive img-circle');
   	  	  img.setAttribute('src',imgArray[i]);

   	  	  boxDiv.append(img);
   	  	  document.getElementsByClassName('custom-create')[0].append(boxDiv);
  	  }
  }

  createElementsJs(3);
  createElementsjQuerry(3);
  createPigeon(3);
  createPigeonJs(3);

})();

