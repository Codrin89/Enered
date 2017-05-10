(function () {
	document.getElementById('submitButton').addEventListener('click' , function() {
		var formCheck = false;

		if(document.getElementById('UserName').value ==	'')	{
			document.getElementById('UserName').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('UserName').parentElement.classList.remove('has-error');
		}
		if(document.getElementById('email').value =='')	{
			document.getElementById('email').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('email').parentElement.classList.remove('has-error');
		}
		if(document.getElementById('password').value ==	'')	{
			document.getElementById('password').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('password').parentElement.classList.remove('has-error');
		}
		if(formCheck) {
			alert('nu ai completat toate campurile!');
		} else {
			var myObject = {
				UserName : document.getElementById('UserName').value,
				email : document.getElementById('email').value,
				password : document.getElementById('password').value
			}
			console.log(myObject);
			myObject = JSON.stringify(myObject);
			console.log(myObject);
			myObject = JSON.parse(myObject);
			console.log(JSON.stringify(myObject));

		}
	});

	document.getElementById('getData').addEventListener('click', function(){
		getData();
	})


	function getData () {


		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			createElements(JSON.parse(xhr.responseText));
		}
		}
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
	//append text to element
	name.append(textName);

	var age = document.createElement('p');
	age.setAttribute('class', 'age');
	var textAge = document.createTextNode(personData.birth_year);
	//append text to element
	age.append(textAge);

	var skin = document.createElement('p');
	skin.setAttribute('class', 'skin');
	var textSkin = document.createTextNode(personData.skin_color);
	//append text to element
	skin.append(textSkin);

	var eye = document.createElement('p');
	eye.setAttribute('class', 'eye');
	var textEye = document.createTextNode(personData.eye_color);
	//append text to element
	eye.append(textEye);

	var hair = document.createElement('p');
	hair.setAttribute('class', 'hair');
	var textHair = document.createTextNode(personData.hair_color);
	//append text to element
	hair.append(textHair);


	console.log(personData.homeworld);

	var arrayHomeworld = personData.homeworld.split('/');
	console.log(arrayHomeworld);

	var homeworldId = arrayHomeworld[arrayHomeworld.length - 2];
	console.log(homeworldId);

	var homeworld = document.createElement('a');
	homeworld.setAttribute('class', 'homeworld');
	homeworld.setAttribute('href', 'planets.html?' + homeworldId);
	var textHomeworld = document.createTextNode('Planet '+ homeworldId);
	homeworld.append(textHomeworld);



	//person div append elements

	divPerson.append(name);
	divPerson.append(eye);
	divPerson.append(age);
	divPerson.append(skin);
	divPerson.append(hair);
	divPerson.append(homeworld);

	console.log(divPerson);

	// append to sw-list
	document.getElementsByClassName('sw-list')[0].append(divPerson);
}

})();