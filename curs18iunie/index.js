(function(){
	var items = [
	{
		"title": "This is the first item title",
		"description": "First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet"

  	 },
  	 {
		"title": "This is the first item title",
		"description": " First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet >First description lorem ipsumsit dolor amet >First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet"

  	 },
  	 {
		"title": "This is the first item title",
		"description": "First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet  First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor ametFirst description lorem ipsumsit dolor amet >First description lorem ipsumsit dolor amet >First description lorem ipsumsit dolor amet First description lorem ipsumsit dolor amet"

  	 }

	]

	function createElementJs1() {
		for(var i = 0 ; i < items.length ; i++) {
			var box = document.createElement('div');
			box.setAttribute('class', 'description-wrapper');

			var heading = document.createElement('h1');
			heading.setAttribute('class','form-text');
			var headingText = document.createTextNode(items[i].title);
			heading.append(headingText);

			var paragraf = document.createElement('p');
			paragraf.setAttribute('class','text');
			var paragrafText = document.createTextNode(items[i].description);
			paragraf.append(paragrafText);

			box.append(heading);
			box.append(paragraf);

			document.getElementsByClassName('description-text')[0].append(box);

		}

	}



		var items2 = [
				{
					"title": "This is the first form",
					"name": "Amalia",
					"password": "password",
					"submit": "go to"
				},
				{
					"title": "This is the second form",
					"name": "Marius",
					"password": "alabala",
					"submit": "Submit"
				},
				{
					"title": "This is the third form",
					"name": "Tedy",
					"password": "portocala",
					"submit": "Log in"
				}
		]

                // <div class="form-wrapper">
				//         <h1 class="form-box"></h1>
				// 	    <input type="text" class="name" placeholder="Name">
				// 		<input type="text" class="password" placeholder="Password">
				// 		<button class="buton1">Submit</button>
				// </div>
				// <div class="form-wrapper">
				//         <h1 class="form-box"></h1>
				// 	    <input type="text" class="name" placeholder="Name">
				// 		<input type="text" class="password" placeholder="Password">
				// 		<button class="buton1">Submit</button>
				// </div>
				// <div class="form-wrapper">
				//         <h1 class="form-box"></h1>
				// 	    <input type="text" class="name" placeholder="Name" value="jkgakfg">
				// 		<input type="text" class="password" placeholder="Password">
				// 		<button class="buton1">Submit</button>
				// </div>



			function createElementJs2() {
				for(var i = 0 ; i < items2.length ; i++) {
					var box2 = document.createElement('div');
					box2.setAttribute('class', 'form-wrapper');


					var heading2 = document.createElement('h1');
					heading2.setAttribute('class','form-box');
					var heading2Text = document.createTextNode(items2[i].title);
					heading2.append(heading2Text);

					var input1 = document.createElement('input');
					input1.setAttribute('class','name');
					input1.setAttribute('type', 'text');
					input1.setAttribute('placeholder', 'Name');
					input1.setAttribute('value', items2[i].name);

					var input2 = document.createElement('input');
					input2.setAttribute('class','password');
					input2.setAttribute('type', 'password');
					input2.setAttribute('placeholder', 'Password');
					input2.setAttribute('value', items2[i].password);

					var buton = document.createElement('button');
					buton.setAttribute('class','buton1');
					var butonText = document.createTextNode(items2[i].submit);
					buton.append(butonText);


					box2.append(heading2);
					box2.append(input1);
					box2.append(input2);
					box2.append(buton);


					document.getElementsByClassName('form-box')[0].append(box2);

					




			}
				  bindEvent();
		}

				createElementJs1();
				createElementJs2();

			function bindEvent() {
				var buttons = document.getElementsByTagName('button');
				for(var i = 0 ; i < buttons.length ; i++) {
					buttons[i].addEventListener('click',function(){
					if(this.parentElement.getElementsByTagName('p').length > 0) {
						this.parentElement.removeChild(this.parentElement.lastChild);
					}
					var inputs = this.parentElement.getElementsByTagName('input');
					var textNode = document.createTextNode('Name: ' + inputs[0].value + ' Password : ' + inputs[1].value);
					var paragraph = document.createElement('p');
					paragraph.append(textNode);
					this.parentElement.append(paragraph);

				})
			}
		}



})();