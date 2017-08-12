(function(){
	var items1 = [
		{
			"title": "This is the first item title",
			"description": "first description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor "
		},
		{
			"title": "This is the second item title",
			"description": "Second description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor "
		},
		{
			"title": "This is the third item title",
			"description": "Third description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor "
		}
	];

	var items2 = [
		{
			"title": "This is the first form",
			"name": "InkTec",
			"password": "password",
			"submit": "Go to"
		},
		{
			"title": "This is the second form",
			"name": "Marius",
			"password": "atentaladetalii",
			"submit": "Sbumit"
		},
		{
			"title": "This is the third form",
			"name": "Codrin",
			"password": "1234",
			"submit": "Login"
		}

	];



function createElementsJs(){
	for(i = 0 ; i < items1.length; i++){

		// <div class="description-wraper">
		// 	<h1 class="h1text"></h1>
		// 	<p class="partext"></p>
		// </div>

		var wraperDiv = document.createElement('div');
		wraperDiv.setAttribute('class', 'description-wraper');
		var title = document.createElement('h1');
		title.setAttribute('class', 'h1text');
		titleText = document.createTextNode(items1[i].title);
		var paragraph = document.createElement('p');
		paragraph.setAttribute('class', 'partext');
		var paragraphText = document.createTextNode(items1[i].description);


		paragraph.append(paragraphText);
		title.append(titleText);
		wraperDiv.append(title);
		wraperDiv.append(paragraph);
		


		document.getElementsByClassName('description-box')[0].append(wraperDiv);
	}

}

	function createForm(){
		for(i = 0 ; i < items2.length; i++){
		// <div class="form-wrapper">
		// 	<h1 class="title"></h1>
		// 	<input type="text" placeholder="name">
		// 	<input type="password" placeholder="password">
		// 	<button class="btn btn-primary"></button>
		// </div>
		var wraperDiv = document.createElement('div');
		wraperDiv.setAttribute('class', 'form-wrapper');

		var title = document.createElement('h1');
		title.setAttribute('class', 'title');
		titleText = document.createTextNode(items2[i].title);

		var inputName = document.createElement('input');
		inputName.setAttribute('type', 'text');
		inputName.setAttribute('placeholder', 'name');	
		inputName.setAttribute('value', items2[i].name);

		var inputPass = document.createElement('input');
		inputPass.setAttribute('type', 'password');
		inputPass.setAttribute('placeholder', 'name');
		inputPass.setAttribute('value', items2[i].password);

		var button = document.createElement('button');
		button.setAttribute('class', 'btn btn-primary');
		buttonText = document.createTextNode(items2[i].submit);
		button.setAttribute('value', items2[i].submit);
		button.append(buttonText);

		title.append(titleText);
		wraperDiv.append(title);
		wraperDiv.append(inputName);
		wraperDiv.append(inputPass);
		wraperDiv.append(button);

		document.getElementsByClassName('form-box')[0].append(wraperDiv);

		}	
		var buttons = document.getElementsByTagName('button');
		for(var i = 0 ; i < buttons.length; i++){
			buttons[i].addEventListener('click', function(){
				if(this.parentElement.getElementsByTagName('p').length > 0){
					this.parentElement.removeChild(this.parentElement.lastChild);
				}
				var paragraph = document.createElement('p');
				paragraphText = document.createTextNode(' Name: ' +  this.parentElement.getElementsByTagName('input')[0].value);
				paragraphText1 = document.createTextNode(' Password: ' +  this.parentElement.getElementsByTagName('input')[1].value);
				paragraph.append(paragraphText);
				paragraph.append(paragraphText1);
				this.parentElement.append(paragraph);
				
			});

			
		}

	}	





console.log(items1);
createElementsJs();
createForm();


})();