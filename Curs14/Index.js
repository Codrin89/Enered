(function() {

	document.getElementById('submitButton') .addEventListener('click',function(){
		var formCheck = false;
		if (document.getElementById('userName').value == '') {
			document.getElementById('userName').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('userName').parentElement.classList.remove('has-error');
		}

		if (document.getElementById('mail').value == '') {
			document.getElementById('mail').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('mail').parentElement.classList.remove('has-error');
		}
		if (document.getElementById('password').value == '') {
			document.getElementById('password').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('password').parentElement.classList.remove('has-error');
		}
		if(formCheck) {
			alert('nu ai completat tot!');
		} else {
			var myObject = {
				username : document.getElementById('userName').value,
				email : document.getElementById('mail').value,
				password : document.getElementById('password').value

			}
			console.log(myObject);
			myObject = JSON.stringify(myObject);
			console.log(myObject);
			myObject = JSON.parse(myObject);
			console.log(myObject);
			
		}	

	});
	document.getElementById('getData').addEventListener('click',function(){
		getData();
	})

	function getData() {
		var xhr = new XMLHttpRequest ();
		xhr.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				createElement(JSON.parse(xhr.responseText));
			}
		};
		xhr.open('GET','http://swapi.co/api/people/', true);
		xhr.send();
	}

	function createElement(bigData) {
		for (var i = 0; i < bigData.results.length ; i++) {
			createPerson (bigData.results[i]);	

		}
	}
	function createPerson(personData){
		var divPerson = document.createElement('div');
		divPerson.setAttribute('class','person');

		var name = document.createElement('h3');
		name.setAttribute('class' ,'name');
		var textName  = document.createTextNode(personData.name);
		//append text to element
		name.append(textName);

		var age = document.createElement('p');
		age.setAttribute('class' , 'age');
		var textAge  = document.createTextNode("birth_year: " + personData.birth_year);
		age.append(textAge);

		var skin = document.createElement('p');
		skin.setAttribute('class' , 'skin');
		var textSkin  = document.createTextNode("skin: " + personData.skin_color);
		skin.append(textSkin);

		var eye = document.createElement('p');
		eye.setAttribute('class' , 'eye');
		var textEye  = document.createTextNode("eye: " + personData.eye_color);
		eye.append(textEye);

		var hair = document.createElement('p');
		hair.setAttribute('class' , 'hair');
		var textHair  = document.createTextNode("hair: " + personData.hair_color);
		hair.append(textHair);

		var height = document.createElement('p');
		height.setAttribute('class' , 'height');
		var textHeight  = document.createTextNode("height: " + personData.height);
		height.append(textHeight);

		var mass = document.createElement('p');
		mass.setAttribute('class' , 'mass');
		var textMass  = document.createTextNode("mass: " + personData.mass);
		mass.append(textMass);

		//person div append elements 
		divPerson.append(name);
		divPerson.append(eye);
		divPerson.append(age);
		divPerson.append(skin);
		divPerson.append(hair);
		divPerson.append(height);
		divPerson.append(mass);



		document.getElementsByClassName('sw-list')[0].append(divPerson);
	}

})();