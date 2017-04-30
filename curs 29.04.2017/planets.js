(function() {

	console.log(window.location.href);

	var planetId = window.location.href.split('?')[1];
	console.log(planetId);

	function loadPlanet() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       createPlanet(JSON.parse(xhr.responseText));
    }
};
xhr.open("GET", "http://swapi.co/api/planets/" + planetId, true);
xhr.send();
}

function createPlanet(bigData) {
	
	var name = document.createElement('h3');
	name.setAttribute('class', 'name');
	var textName = document.createTextNode(bigData.name);
	name.append(textName);

	//get container from html page
	var container = document.getElementsByClassName('container')[0];


	var climate = document.createElement('p');
	climate.setAttribute('class', 'climate');
	var textClimate = document.createTextNode(bigData.climate);
	climate.append(textClimate);

	var gravity = document.createElement('p');
	gravity.setAttribute('class', 'gravity');
	var textGravity = document.createTextNode(bigData.gravity);
	gravity.append(textGravity);

	var population = document.createElement('p');
	population.setAttribute('class', 'population');
	var textPopulation = document.createTextNode(bigData.population);
	population.append(textPopulation);

	var diameter = document.createElement('p');
	diameter.setAttribute('class', 'diameter');
	var textDiameter = document.createTextNode(bigData.diameter);
	diameter.append(textDiameter);

	var terrain = document.createElement('p');
	terrain.setAttribute('class', 'terrain');
	var textTerrain = document.createTextNode(bigData.terrain);
	terrain.append(textTerrain);

	var orbital_period = document.createElement('p');
	orbital_period.setAttribute('class', 'orbital_period');
	var textOrbital_period = document.createTextNode(bigData.orbital_period);
	orbital_period.append(textOrbital_period);

	//append request content to container from html
	container.append(name);
	container.append(climate);
	container.append(gravity);
	container.append(population);
	container.append(diameter);
	container.append(terrain);
	container.append(orbital_period);

}

loadPlanet();

	document.getElementById('backToIndex').addEventListener('click', function() {
		window.location.href = "index.html";
	});



})();