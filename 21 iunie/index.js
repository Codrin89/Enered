(function() {
	
	var items= [
		{
			"title": "this is the title 1 ",
			"input1": "adelina",
			"input2": "adelina",
			"input3": "1234",
		},
		{
			"title": "this is the title 2 ",
			"input1": "adelina2",
			"input2": "adelina2",
			"input3": "146356544",
		},
		{
			"title": "this is the title 3",
			"input1": "adelina3",
			"input2": "adelina3",
			"input3": "1276575634",
		}
	];

	function createElementsJs(){
		for(var i=0 ; i < items.length ; i++){
			//<div class="item col-md-3">
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class','item col-md-3');

			//<h1 class="text-center">Title</h1>
			var heading = document.createElement('h1');
			heading.setAttribute('class','text-center');
			var headingText = document.createTextNode(items[i].title);
			heading.append(headingText);

			//<input class="form-control" name="name" type="text">
			var input1 = document.createElement('input');
			input1.setAttribute('class','form-control');
			input1.setAttribute('name','name');
			input1.setAttribute('type','text');
			input1.setAttribute('value', items[i].input1);

			//<input class="form-control" name="prenume" type="text">
			var input2 = document.createElement('input');
			input2.setAttribute('class','form-control');
			input2.setAttribute('name','prenume');
			input2.setAttribute('type','text');
			input2.setAttribute('value', items[i].input2);

			//<input class="form-control" name="parola" type="password">
			var input3 = document.createElement('input');
			input3.setAttribute('class','form-control');
			input3.setAttribute('name','parola');
			input3.setAttribute('type','password');
			input3.setAttribute('value', items[i].input3);

			//<button class="btn btn-warning">Give me data</button>
			var button = document.createElement('button');
			button.setAttribute('class','btn btn-warning');
			var buttonText = document.createTextNode('Give me data');
			button.append(buttonText);

			//<p>Inputs results:</p>
			var paragraph = document.createElement('p');
			var paragraphText = document.createTextNode('Inputs results');
			paragraph.append(paragraphText);





			boxDiv.append(heading);
			boxDiv.append(input1);
			boxDiv.append(input2);
			boxDiv.append(input3);
			boxDiv.append(button);
			boxDiv.append(paragraph);

			document.getElementsByClassName('container')[0].append(boxDiv);

		}
		bindEvents();	
	}


	document.getElementById('createForm').addEventListener('click', function() {
		createElementsJs();
	})

	function bindEvents(){
		var buttons = document.getElementsByTagName('button');
 		for(var i=0 ; i < buttons.length ; i++){
     		buttons[i].addEventListener('click', function(){
         		console.log(this);
         		console.log(this.parentElement);
				var inputs = this.parentElement.getElementsByTagName('input');
				this.parentElement.getElementsByTagName('p')[0].innerHTML = 'Name: ' + inputs[0].value + ' password: ' + inputs[1].value;
			});
		}
	}

})();