(function() {

	var items1 = [
		{
			"title": "This is the first item title",
			"description": "First description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet"
		},
		{
			"title": "This is the first item title",
			"description": "First description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet"
		},
		{
			"title": "This is the first item title",
			"description": "First description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet"
		}
	]

function createElement() {
	for (var i = 0; i < items1.length; i++) {
		var box = document.createElement('div');
		box.setAttribute('class', 'description-wrapper');

		var heading = document.createElement('h1');
		heading.setAttribute('class', 'text-center');
		var headingText = document.createTextNode(items1[i].title);
		heading.append(headingText);

		var paragraf = document.createElement('p');
		paragraf.setAttribute('class', 'text');
		var paragrafText = document.createTextNode(items1[i].description);
		paragraf.append(paragrafText);

		box.append(heading);
		box.append(paragraf);

		document.getElementsByClassName('description-text')[0].append(box);
		}
	}

	var items2 = [
		{
			"title": "This is the first form",
			"input1": "Amalya",
			"input2": "abcdefgh",
			"button": "Submit"
		},
		{
			"title": "This is the second form",
			"input1": "Adelina",
			"input2": "ijklmnopq",
			"button": "Go to"
		},
		{
			"title": "This is the third form",
			"input1": "Ioana",
			"input2": "rstuvwxyz",
			"button": "Login"
		}
	]

function createElementJs(){
	for(var i = 0; i < items2.length; i++ ) {
		var box = document.createElement('div');
		box.setAttribute('class', 'continut');

		var heading = document.createElement('h1');
		heading.setAttribute('class', 'text-center');
		var headingText = document.createTextNode(items2[i].title);
		heading.append(headingText);

		var input1 = document.createElement('input');
		input1.setAttribute('class', 'name');
		input1.setAttribute('type', 'name');
		input1.setAttribute('placeholder', 'Name');
		input1.setAttribute('value', items2[i].input1);
		

		var input2 = document.createElement('input');
		input2.setAttribute('class', 'password');
		input2.setAttribute('type', 'password');
		input2.setAttribute('placeholder', 'Password');
		input2.setAttribute('value', items2[i].input2);
		

		var button = document.createElement('button');
		button.setAttribute('class', 'btn btn-warning');
		var buttonText = document.createTextNode(items2[i].button);
		button.append(buttonText);

		box.append(heading);
		box.append(input1);
		box.append(input2);
		box.append(button);

		document.getElementsByClassName('form-text')[0].append(box);
	
	}
	bindEvent();
}


createElement();
createElementJs();

function bindEvent(){
		var buttons = document.getElementsByTagName('button');
			for( var i = 0; i < buttons.length; i++) {
				
				buttons[i].addEventListener('click', function() {
					if(this.parentElement.getElementsByTagName('p').length > 0) {
						this.parentElement.removeChild(this.parentElement.lastChild);
					}
					console.log(this);
					console.log(this.parentElement);
					var inputs = this.parentElement.getElementsByTagName('input'); 
					var textNode = document.createTextNode('Name: ' + inputs[0].value + ',' + ' Password: ' + inputs[1].value); 
					var paragraf = document.createElement('p');
					paragraf.append(textNode);
					this.parentElement.append(paragraf);

				})
			}		
		
		}


})();