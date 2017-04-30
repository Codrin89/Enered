(function() {

	document.getElementById('submitButton').addEventListener('click' , function() {
  		var formCheck = false;
		if(document.getElementById('userName').value == '') {
			document.getElementById('userName').parentElement.classList.add('has-error');
			formCheck = true;
	   }else {
	   		document.getElementById('userName').parentElement.classList.remove('has-error');
	   }

	   if(document.getElementById('email').value == '') {
			document.getElementById('email').parentElement.classList.add('has-error');
			formCheck = true;
	   }else {
	   		document.getElementById('email').parentElement.classList.remove('has-error');
	   	}

	   if(document.getElementById('password').value == '') {
			document.getElementById('password').parentElement.classList.add('has-error');
			formCheck = true;
	   }else {
	   		document.getElementById('password').parentElement.classList.remove('has-error');
	   	}

	   if(formCheck) {
	   	alert('nu ai completat toate campurile!');
	   }else {
	   		var myObject = {
	   			username : document.getElementById('userName').value, 
	   			email : document.getElementById('email').value,
	   			password : document.getElementById('password').value 
	   		}
	   		console.log(myObject);
	   		var myObject = JSON.stringify(myObject);
	   		console.log(myObject);
	   		var myObject = JSON.parse(myObject);
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
	    	xhr.open("GET" , "http://swapi.co/api/people/" , true);
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
			//append to sw-list
			name.append(textName);

			var age = document.createElement('p');
			age.setAttribute('class', 'age');
			var textAge = document.createTextNode(personData.birth_year);
			//append to sw-list
			age.append(textAge);

			var skin = document.createElement('p');
			skin.setAttribute('class', 'skin');
			var textSkin = document.createTextNode(personData.skin_color);
			//append to sw-list
			skin.append(textSkin);

			var eye = document.createElement('p');
			eye.setAttribute('class', 'eye');
			var textEye = document.createTextNode(personData.eye_color);
			//append to sw-list
			eye.append(textEye);

			var hair = document.createElement('p');
			hair.setAttribute('class', 'hair');
			var textHair = document.createTextNode(personData.hair_color);
			//append to sw-list
			hair.append(textHair);

			var gender = document.createElement('p');
			gender.setAttribute('class', 'gender');
			var textGender = document.createTextNode(personData.gender);
			//append to sw-list
			gender.append(textGender);

			var mass = document.createElement('p');
			mass.setAttribute('class', 'mass');
			var textMass = document.createTextNode(personData.mass);
			//append to sw-list
			mass.append(textMass);


			

			var arrayHomeworld = personData.homeworld.split('/');
			

			var homeworldId = arrayHomeworld[arrayHomeworld.length - 2];
			

			var homeworld = document.createElement('a');
			homeworld.setAttribute('class', 'homeworld');
			homeworld.setAttribute('href', 'planets.html?' + homeworldId);
			var textHomeworld = document.createTextNode('Planets' + homeworldId);
			//append to sw-list
			homeworld.append(textHomeworld);

			//person div append elements

			divPerson.append(name);
			divPerson.append(eye);
			divPerson.append(age);
			divPerson.append(skin);
			divPerson.append(hair);
			divPerson.append(gender);
			divPerson.append(mass);
			divPerson.append(homeworld);



			//append to sw-list
			document.getElementsByClassName('sw-list')[0].append(divPerson);
		}
		getData();


})();
