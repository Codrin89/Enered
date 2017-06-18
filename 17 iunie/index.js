
(function(){

		var imgArray = ['https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi276aQv8TUAhUCWxQKHe1cD2oQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fbryceolson14%2Fin-my-nature%2F&psig=AFQjCNEv2eVu0MfQNQtqviX8zu-twxPNWA&ust=1497775604018844', 'https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjz87-9v8TUAhVEUBQKHe0BA9UQjRwIBw&url=https%3A%2F%2Fwww.tumblr.com%2Ftagged%2Fnature-child-aesthetic&psig=AFQjCNEv2eVu0MfQNQtqviX8zu-twxPNWA&ust=1497775604018844', 'https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwisvYfav8TUAhWDuxQKHUNcAwEQjRwIBw&url=https%3A%2F%2Fwww.visitbloomington.com%2Fthings-to-do%2Foutdoor-and-recreation%2Fnature-preserves%2F&psig=AFQjCNEv2eVu0MfQNQtqviX8zu-twxPNWA&ust=1497775604018844'];





		function createElementsJs(elementsLength) {
			for (var i = 0; i < elementsLength; i++) {
				//create div class="box"
				var boxDiv = document.createElement('div');
				boxDiv.setAttribute('class', 'box');

				//create h1 class="text-center"
				var headingH1 = document.createElement('h1');
				headingH1.setAttribute('class', 'text-center');
				var headingH1Text = document.createTextNode('This is a heading');
				headingH1.append(headingH1Text);

				//create input class="fomrm-control"	 type="text"
				var input = document.createElement('input');
				input.setAttribute('class', 'form-control');
				input.setAttribute('type', 'text');

				//create a class="btn btn-primary" href="javascript:void(0)"
				var anchorButton = document.createElement('a');
				anchorButton.setAttribute('class', 'btn btn-primary');
				anchorButton.setAttribute('href', 'javascript:void(0)');
				var anchorText = document.createTextNode('Do something');
				anchorButton.append(anchorText);


				boxDiv.append(headingH1);
				boxDiv.append(input);
				boxDiv.append(anchorButton);

				document.getElementsByClassName('js-create')[0].append(boxDiv);

			}
				
		}


		function createElementsJquery(elementsLength) {
			for(var i = 0; i < elementsLength; i++) {
				var box = $('<div class="box"><h1 class="text-center"> This is a heading</h1><input type="text" class="form-control"><a href="javascript:void(0)" class="btn btn-primary"> Do something</a></div>');
		document.getElementsByClassName('jquery-create')[0].append(box[0]);	
			}	
		}


		function createPandaJs(elementsLength) {
			for (var i = 0; i < elementsLength; i++) {
				var boxDiv = document.createElement('div');
				boxDiv.setAttribute('class', 'box-img text-center');

				var img = document.createElement('img');
				img.setAttribute('class', 'img-responsive img-circle');
				img.setAttribute('src', imgArray[i]);
			

			boxDiv.append(img);		

			document.getElementsByClassName('custom-create')[0].append(boxDiv);
			}
		}


// <div class="box-img text-center">
// <img src="http:.///pozxakdfljfa.jpg" class="img-responsive img-circle">
// </div>
		function createPanda(elementsLength) {
			for (var i = 0; i < elementsLength; i++) {
				var img = $('<div class="box-img text-center"><img src="' + imgArray[i] + '"class="img-responsive img-circle"></div>');

			document.getElementsByClassName('custom-create')[0].append(img[0]);
		}
	}


createElementsJs(3);
createElementsJquery(3);
createPandaJs(3);	
createPanda(3);

})();