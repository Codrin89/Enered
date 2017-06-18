(function(){
	var items1=[
	{
		"title": "This is the first item title",
		"description":"First decriptionn lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"

	},
	{
		"title":"this is the second title",
		"description":"First decriptionn lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
	},
	{
		"title":"this is the second title",
		"description":"First decriptionn lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
	}

	]

	function populateItem(items1){
		for(var i=0 ; i<items1.length ;i++){

			var descriptionWrap = document.createElement('div');
			descriptionWrap.setAttribute('class','description-wrapper');

			var header = document.createElement('h1');
			var headerText= document.createTextNode(items1[i].title);
			header.append(headerText);
			descriptionWrap.append(header);

			var padding = document.createElement('p');
			var paddingText= document.createTextNode(items1[i].description);
			padding.append(paddingText);

			descriptionWrap.append(padding);
			 document.getElementsByClassName('description-box')[0].append(descriptionWrap);
		}
	}

  populateItem(items1);





 	var items2= [
	 	{
	 		"title": "this is the first form",
	 		"name": "Marius",
	 		"password":"password",
	 		"submit": "Go to"

	 	},
	 	{
	 		"title": "this is the second form",
	 		"name": "Madalina",
	 		"password":"blablablad",
	 		"submit": "Sumit"

	 	},
	 	{
	 		"title": "this is the third form",
	 		"name": "Teddy",
	 		"password":"1234",
	 		"submit": "Login"

	 	}
 	];




	function form(items2){
		for(var i=0 ; i<items2.length ;i++){

		 	var formWrap =document.createElement('div');
		 	formWrap.setAttribute('class','form-wrapper');
		 	var headerForm=document.createElement('h1');
		 	var headerTextForm= document.createTextNode(items2[i].title);
			headerForm.append(headerTextForm);

			var inputFormName=document.createElement('input');
			inputFormName.setAttribute('type' , 'text');
			inputFormName.setAttribute('placeholder','Name');
			inputFormName.setAttribute('value',items2[i].name);


			var inputFormPass=document.createElement('input');
			inputFormPass.setAttribute('type','password');
			inputFormPass.setAttribute('placeholder','Password');
			inputFormPass.setAttribute('value',items2[i].password);

			var button=document.createElement('button');
			button.setAttribute('class','btn btn-primary');
			var btnText= document.createTextNode(items2[i].submit);
			button.append(btnText);

			formWrap.append(headerForm);
			formWrap.append(inputFormName);
			formWrap.append(inputFormPass);
			formWrap.append(button);

			document.getElementsByClassName('form-box')[0].append(formWrap);
			
		}
		bindEvents();
	}
	function bindEvents() {
		var buttons=document.getElementsByTagName('button');
		for(var i=0 ; i<buttons.length ;i++){
			buttons[i].addEventListener('click',function(){
				if(this.parentElement.getElementsByTagName('p').length > 0){
					this.parentElement.getElementsByTagName('p')[0].removeChild();
				}
				console.log(this);
				console.log(this.parentElement);

				var inputs= this.parentElement.getElementsByTagName('input');
				var textNode = document.createTextNode('Name: ' + inputs[0].value + '  -> Password: ' + inputs[1].value);
				var paragraph = document.createElement('p');
				paragraph.append(textNode);
				this.parentElement.append(paragraph);
			});

		}

	}



form(items2);


})();
