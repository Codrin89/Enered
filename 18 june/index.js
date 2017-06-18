(function() {
	var items1 = [
	{
		"title": "This is the first item title",
		"description": "First description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
	},
	{
		"title": "This is the second item title",
		"description": "First description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
	},
	{
		"title": "This is the third item title",
		"description": "First description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
	}
	];

	console.log(items1);

	// <div class="description-wrapper">
 	// 		<h1>Titlu</h1>
 	// 		<p>description</p>
	//     </div>
		function createElementsJs(){
			for(var i=0 ; i < items1.length ; i++){
				// <div class="description-wrapper">
				var boxDiv = document.createElement('div');
				boxDiv.setAttribute('class','description-wrapper');

				// <h1>Titlu</h1>  
				var heading = document.createElement('h1');
				var headingText = document.createTextNode(items1[i].title);
				heading.append(headingText);
				//<p>description</p>
				var paragraph = document.createElement('p');
				var paragraphText = document.createTextNode(items1[i].description);
				paragraph.append(paragraphText);

				
				boxDiv.append(heading);
				boxDiv.append(paragraph);

			document.getElementsByClassName('description-box')[0].append(boxDiv);


			}
		}
		var items2 = [
			{
				"title": "This is the first form",
				"name": "Marius",
				"password": "password",
				"submit": "Go to"
			},
			{
				"title": "This is the second form",
				"name": "Madalina",
				"password": "atentaladetalii",
				"submit": "Submit"
			},
			{
				"title": "This is the third form",
				"name": "Teddy",
				"password": "1234",
				"submit": "login"
			},
		];

		function createElementsJs2(){
			for(var i=0 ; i < items2.length ; i++){
				// 	<div class="form-wrapper">
				var form = document.createElement('div');
				form.setAttribute('class','form-wrapper');

				//<h1 class="text-center">This is a heading</h1>
				// 
				var h1 = document.createElement('h1');
				h1.setAttribute('class','text-center');
				// <h1 class="text-center"></h1>
				var h1Text = document.createTextNode(items2[i].title); 
			    h1.append(h1Text);
			    
			    //<input type="text" placeholder="Name">
			    var input = document.createElement('input');
			    input.setAttribute('type', 'text');
			    input.setAttribute('placeholder', 'Name');
			    input.setAttribute('value', items2[i].name);

			    //<input type="text" placeholder="password">
			    var input2 = document.createElement('input');
			    input2.setAttribute('type','text');
			    input2.setAttribute('placeholder','password');
			    input2.setAttribute('value', items2[i].password);

			    //<button class="btn btn-primary">Titlu</button>
			    var button = document.createElement('button');
			    button.setAttribute('class','btn btn-primary');
			    var buttonText = document.createTextNode(items2[i].submit);
			    button.append(buttonText);


			    form.append(h1);
			    form.append(input);
			    form.append(input2);
			    form.append(button);

			    document.getElementsByClassName('form-wrapper')[0].append(form);
	         }
				bindEvents();
         }


         function bindEvents() {
         		var buttons = document.getElementsByTagName('button');
         		for(var i=0 ; i < buttons.length ; i++) {
         			buttons[i].addEventListener('click', function(){
         				console.log(this);
         				console.log(this.parentElement);
         				var inputs = this.parentElement.getElementsByTagName('input');
         				var textNode = document.createTextNode('Name: ' + inputs[0].value + ' password: ' + inputs[1].value);
         				var paragraph = document.createElement('p');
         				paragraph.append(textNode);
         				this.parentElement.append(paragraph);
         			})
         		}
         	}
         
		createElementsJs();
		createElementsJs2();
		
})();