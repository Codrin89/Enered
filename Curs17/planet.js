(function(){
	console.log(window.location.href);

	var planetID =  window.location.href.split('?')[1];
	console.log(planetID);

	function loadPlanet() {
		var xhr = new XMLHttpRequest();
		    xhr.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		       // xhr.responseText;
		       createPlanet(JSON.parse(xhr.responseText));
		      }
           }; 
			xhr.open("GET", "http://swapi.co/api/planets/" + planetID, true);
			xhr.send();
	}
	function createPlanet(bigData){
		console.log(bigData);
		var name = document.createElement('h3');
		name.setAttribute('class','name');
		var textName = document.createTextNode(bigData.name);
		name.append(textName);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(name);


		var rotation_period = document.createElement('p');
		rotation_period.setAttribute('class','rotation_period');
		var textRotation_period = document.createTextNode(bigData.rotation_period);
		rotation_period.append(textRotation_period);
		var container = document.getElementsByClassName('container')[0];
		container.append(rotation_period);


		var orbital_period = document.createElement('p');
		orbital_period.setAttribute('class','orbital_period');
		var textOrbital_period = document.createTextNode(bigData.orbital_period);
		orbital_period.append(textOrbital_period);
		var container = document.getElementsByClassName('container')[0];
		container.append(orbital_period);


		var climate = document.createElement('p');
		climate.setAttribute('class','climate');
		var textClimate = document.createTextNode(bigData.climate);
		climate.append(textClimate);
		var container = document.getElementsByClassName('container')[0];
		container.append(climate);

		var diameter = document.createElement('p');
		diameter.setAttribute('class','diameter');
		var textDiameter = document.createTextNode(bigData.diameter);
		diameter.append(textDiameter);
		var container = document.getElementsByClassName('container')[0];
		container.append(diameter);
	}
	loadPlanet();


	document.getElementById('backToIndex').addEventListener('click',function(){
		window.location.href = "index.html";
	});
})();