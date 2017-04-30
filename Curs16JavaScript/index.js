(function() {

		document.getElementById('submitButton').addEventListener('click', function() {
			var formCheck = false;
			if (document.getElementById('userName').value == ''){
				document.getElementById('userName').parentElement.classList.add('has-error');
				formCheck = true;
		}else{
			document.getElementById('userName').parentElement.classList.remove('has-error');
		}


			if (document.getElementById('email').value == ''){
			document.getElementById('email').parentElement.classList.add('has-error');
			formCheck = true;

		}else{
			document.getElementById('email').parentElement.classList.remove('has-error');
		}


			if (document.getElementById('password').value == ''){
				document.getElementById('password').parentElement.classList.add('has-error');
				formCheck = true;		
		}else{
			document.getElementById('password').parentElement.classList.remove('has-error');
		}


			if(formCheck) {
				alert('nu ai arat toate campurile!');
			}else{
				var myObject = {
					username : document.getElementById('userName').value,
					email : document.getElementById('email').value,
					password : document.getElementById('password').value					
				}
				console.log(myObject);
				myObject = JSON.stringify(myObject);
				console.log(myObject);
				myObject = JSON.parse(myObject);
				console.log(myObject);
			}

});
		

		function getData() {

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   createElements(JSON.parse(xhr.responseText));

				}
					};
			xhr.open("GET", "http://swapi.co/api/people/", true);
			xhr.send();

		}

		function createElements(bigData) {
			for(var i = 0 ; i < bigData.results.length ; i++) {
				createPerson(bigData.results[i]);
			}
		}

		function createPerson(personData) {
			var divPerson = document.createElement('div');
			divPerson.setAttribute('class', 'person');



			var name = document.createElement('h3');
			name.setAttribute('class', 'name');
			var textName = document.createTextNode(personData.name);
			name.append(textName);
			divPerson.append(name);

			var age = document.createElement('p');
			age.setAttribute('class', 'age');
			var textAge = document.createTextNode(personData.birth_year);
			age.append(textAge);
			divPerson.append(age);


			var skin = document.createElement('p');
			skin.setAttribute('class', 'skin');
			var textSkin = document.createTextNode(personData.skin_color);
			skin.append(textSkin);
			divPerson.append(skin);

			var eye = document.createElement('p');
			eye.setAttribute('class', 'eye');
			var textEye = document.createTextNode(personData.eye_color);
			eye.append(textEye);
			divPerson.append(eye);

 			var hair = document.createElement('p');
			hair.setAttribute('class', 'hair');
			var textHair = document.createTextNode(personData.hair_color);
			hair.append(textHair);

			divPerson.append(hair);
			var gender = document.createElement('p');
			gender.setAttribute('class', 'gender');
			var textGender = document.createTextNode(personData.gender);
			gender.append(textGender);
			divPerson.append(gender)

			var height = document.createElement('p');
			height.setAttribute('class', 'height');
			var textHeight = document.createTextNode(personData.height);
			height.append(textHeight);
			divPerson.append(height)


			//console.log(divPerson);

			console.log(personData.homeworld);	//console link

			var arrayHomeworld = personData.homeworld.split('/');
			console.log(arrayHomeworld);    //console link split

			var homeworldId = arrayHomeworld[arrayHomeworld.length - 2];
			console.log(homeworldId);	// console link split -> value.length -2


			var homeworld = document.createElement('a');
			homeworld.setAttribute('class', 'homeworld');
			homeworld.setAttribute('href', 'planets.html?' + homeworldId);
			var textHomeworld = document.createTextNode('Planet' + homeworldId);
			homeworld.append(textHomeworld);
			divPerson.append(homeworld)
			// homeworld.setAttribute('href', 'planets.html?' personData.homeworld.split())
			
			//append to sw-lis
			document.getElementsByClassName('sw-list')[0].append(divPerson);


		}

		getData();

})();