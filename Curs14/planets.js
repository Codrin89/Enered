(function() {

	var planetID = window.location.href.split('?')[1];
	console.log(planetID);

	function loadPlanet () {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				createPlanet(JSON.parse(xhr.responseText));
			}
		};
		xhr.open("GET", "http://swapi.co/api/planets/" + planetID , true);
		xhr.send();
	}
	
	function createPlanet(bigData) {
		console.log(bigData);

		var name = document.createElement('h3');
		name.setAttribute('class', 'name');
		var textName = document.createTextNode(bigData.name);
		name.append(textName);

		var climate = document.createElement('p');
		climate.setAttribute('class', 'climate');
		var textClimate = document.createTextNode(bigData.climate);
		climate.append(textClimate);

		var diameter = document.createElement('p');
		diameter.setAttribute('class', 'diameter');
		var textDiameter = document.createTextNode(bigData.diameter);
		diameter.append(textDiameter);

		var population = document.createElement('p');
		population.setAttribute('class', 'population');
		var textPopulation = document.createTextNode(bigData.population);
		population.append(textPopulation);


		//get container from html page
		var container = document.getElementsByClassName('container')[0];

		//append request content to container from html
		container.append(name);
		container.append(climate);
		container.append(diameter);
		container.append(population);

		console.log(container);
	}

	loadPlanet();

})();