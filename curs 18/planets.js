(function(){
	console.log(window.location.href);
	var planetID = window.location.href.split('?')[1];
	console.log(planetID);
	function loadPlanet(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200){
    			createPlanet(JSON.parse(xhr.responseText));
    		}
		};
		xhr.open("GET", "http://swapi.co/api/planets/" + planetID , true);
		xhr.send();
	}
	function createPlanet(bigData){
		console.log(bigData);
		var name = document.createElement('h3');
		name.setAttribute('class','name');
		var textName = document.createTextNode(bigData.name);
		name.append(textName);
		var container = document.getElementsByClassName('container')[0];
		container.append(name);

		var population = document.createElement('h3');
		population.setAttribute('class','population');
		var textPopulation = document.createTextNode("Population:" + bigData.population);
		population.append(textPopulation);
		container.append(population);

		var orbital_period = document.createElement('h3');
		orbital_period.setAttribute('class','orbital_period');
		var textOrbital_period = document.createTextNode("Orbital period:" + bigData.orbital_period);
		orbital_period.append(textOrbital_period);
		container.append(orbital_period);
		
		var climate = document.createElement('h3');
		climate.setAttribute('class','climate');
		var textClimate = document.createTextNode("Climate:" + bigData.climate);
		climate.append(textClimate);
		container.append(climate);

		var created = document.createElement('h3');
		created.setAttribute('class','created');
		var textCreated = document.createTextNode("Created:" + bigData.created);
		created.append(textCreated);
		container.append(created);

		var terrain = document.createElement('h3');
		terrain.setAttribute('class','terrain');
		var textTerrain = document.createTextNode("Terrain:" + bigData.terrain);
		terrain.append(textTerrain);
		container.append(terrain);
	}
	loadPlanet();
	document.getElementById('backToIndex').addEventListener('click',function(){
		window.location.href = "index.html";
	});
})();