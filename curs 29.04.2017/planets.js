(function(){
	console.log(window.location.href);



	var planetID = window.location.href.split('?')[1];
	console.log(planetID);

	function loadPlanet(){
			var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	createPlanet(JSON.parse(xhr.responseText));
		   
		    }
		};
		xhr.open("GET", "http://swapi.co/api/planets/" +planetID, true);
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
		
	

        var gravity = document.createElement('h3');
		gravity.setAttribute('class','gravity');
		var textGravity = document.createTextNode("gravity: " + bigData.gravity);
		gravity.append(textGravity);
		

        var population = document.createElement('h3');
		population.setAttribute('class','population');
		var textPopulation = document.createTextNode("population: " + bigData.population);
		population.append(textPopulation);
		


		var terrain = document.createElement('h3');
		terrain.setAttribute('class','terrain');
		var textTerrain = document.createTextNode("terrain: " +bigData.terrain);
		terrain.append(textTerrain);
		


		var climate = document.createElement('h3');
		climate.setAttribute('class','climate');
		var textClimate = document.createTextNode("climate: " +bigData.climate);
		climate.append(textClimate);
		


		var diameter = document.createElement('h3');
		diameter.setAttribute('class','diameter');
		var textDiameter = document.createTextNode("diameter: " +bigData.diameter);
		diameter.append(textDiameter);
		

		container.append(name);
		container.append(gravity);
		container.append(population);
		container.append(terrain);
        container.append(climate);
        container.append(diameter);



}
	
	loadPlanet();

	document.getElementById('backToIndex').addEventListener('click',function(){
		window.location.href ="index.html";
});

})();