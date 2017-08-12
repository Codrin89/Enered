(function() {
	
	var items = [
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

		// <div class="container">
		// 	<div class="item col-md-3">
		// 		<h1 class="text-center">Title</h1>
		// 		<input class="form-control" name="name" type="text">
		// 		<input class="form-control" name="prenume" type="text">
		// 		<input class="form-control" name="parola" type="password">
		// 		<button class="btn btn-warning">Give me data</button>
		// 		<p>Inputs results:</p>
		// 	</div>
		// </div>	


		function createElements(){
			for(var i = 0 ; i < items.length ; i ++ ){		
// <div class="container">
				var divBoxe = document.createElement('div');
				divBoxe.setAttribute('class', 'container');
// 	<div class="item col-md-3">
				var divBox = document.createElement('div');
				divBox.setAttribute('class', 'item col-md-3');
//<h1 class="text-center">Title</h1>
				var title = document.createElement('h1');
				title.setAttribute('class', 'text-center');
				titleText = document.createTextNode(items[i].title);

				title.append(titleText);
				divBox.append(title);
//<input class="form-control" name="name" type="text">
				var inputName = document.createElement('input');
				inputName.setAttribute('class', 'form-control');
				inputName.setAttribute('name', 'name');
				inputName.setAttribute('type', 'text');
				inputName.setAttribute('value', items[i].input1);
	
				divBox.append(inputName);
//<input class="form-control" name="prenume" type="text">

				var inputPreName = document.createElement('input');
				inputPreName.setAttribute('class', 'form-control');
				inputPreName.setAttribute('name', 'prenume');
				inputPreName.setAttribute('type', 'text');
				inputPreName.setAttribute('value', items[i].input2);

				divBox.append(inputPreName);
//<input class="form-control" name="parola" type="password">
				var inputPass = document.createElement('input');
				inputPass.setAttribute('class', 'form-control');
				inputPass.setAttribute('name', 'parola');
				inputPass.setAttribute('type', 'password');
				inputPass.setAttribute('value', items[i].input3);

				divBox.append(inputPass);

// <button class="btn btn-warning">Give me data</button>
				var button = document.createElement('button');
				button.setAttribute('class', 'btn btn-warning');
				var buttonText = document.createTextNode('Give me data');

				button.append(buttonText);
				divBox.append(button);
	
// <p>Inputs results:</p>	
				var results = document.createElement('p');
				var resultsText = document.createTextNode('Inputs results : ');

				results.append(resultsText);
				divBox.append(results);

				divBoxe.append(divBox);


				document.getElementsByClassName('container')[0].append(divBox);

			}
			var buttons = document.getElementsByTagName('button');
			for(var i = 0 ; i < buttons.length ; i++){

				buttons[i].addEventListener('click', function(){
				
				
				this.parentElement.getElementsByTagName('p')[0].innerHTML = 'Nume : ' + this.parentElement.getElementsByTagName('input')[0].value;
			



				});
			}







		}


		createElements(3);











})();