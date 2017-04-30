(function() {
	console.log(window.location.href);

	var planetID = window.location.href.split('?')[1];
	console.log(planetID);

	function loadPlanet() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				   createPlanet(JSON.parse(xhr.responseText));

				}

		};
		xhr.open('GET', "http://swapi.co/api/planets/" + planetID , true);
		xhr.send();
	}

	function createPlanet(bigData) {
		
		var name = document.createElement('h3');
		name.setAttribute('class', 'name');
		var textName = document.createTextNode(bigData.name);
		name.append(textName);
		//get container from html
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(name);
		console.log(bigData);


		var climate = document.createElement('h3');
		climate.setAttribute('class', 'climate');
		var textClimate = document.createTextNode('climate: ' + bigData.climate);
		climate.append(textClimate);
		//get container from html
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(climate);



		var diameter = document.createElement('h3');
		diameter.setAttribute('class', 'diameter');
		var textDiameter = document.createTextNode('diameter: ' + bigData.diameter);
		diameter.append(textDiameter);
		//get container from html
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(diameter);


		var orbital_period = document.createElement('h3');
		orbital_period.setAttribute('class', 'orbital_period');
		var textOrbital_period = document.createTextNode('orbital_period: ' + bigData.orbital_period);
		orbital_period.append(textOrbital_period);
		//get container from html
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(orbital_period);



		var population = document.createElement('h3');
		population.setAttribute('class', 'population');
		var textPopulation = document.createTextNode('population: ' + bigData.population);
		population.append(textPopulation);
		//get container from html
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(population);


		var terrain = document.createElement('h3');
		terrain.setAttribute('class', 'terrain');
		var textTerrain = document.createTextNode('terrain: ' + bigData.terrain);
		terrain.append(textTerrain);
		//get container from html
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(terrain);


		var rotation_period = document.createElement('h3');
		rotation_period.setAttribute('class', 'rotation_period');
		var textRotation_period = document.createTextNode('rotation_period: ' + bigData.rotation_period);
		rotation_period.append(textRotation_period);
		//get container from html
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(rotation_period);


		var surface_water = document.createElement('h3');
		surface_water.setAttribute('class', 'surface_water');
		var textSurface_water = document.createTextNode('surface_water: ' + bigData.surface_water);
		surface_water.append(textSurface_water);
		//get container from html
		var container = document.getElementsByClassName('container')[0];
		//append request content to container from html
		container.append(surface_water);

	}	
		
	loadPlanet();


	document.getElementById('backToIndex').addEventListener('click', function() {
		window.location.href = "index.html";
	});

			
})();