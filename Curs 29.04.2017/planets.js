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
		xhr.open("GET", "http://swapi.co/api/planets/" + planetID , true);
		xhr.send();
	}
	function createPlanet(bigData) {
		console.log(bigData);
		var name = document.createElement('h3');
		name.setAttribute('class','name');
		var textName = document.createTextNode(bigData.name);
		name.append(textName);
		
	    

	    var gravity = document.createElement('p');
		gravity.setAttribute('class','gravity');
		var textGravity = document.createTextNode("gravity: " + bigData.gravity);
		gravity.append(textGravity);
		

		var population = document.createElement('p');
		population.setAttribute('class','gravity');
		var textPopulation = document.createTextNode("population: " + bigData.population);
		population.append(textPopulation);
		
		var orbital_period = document.createElement('p');
		orbital_period.setAttribute('class','orbital_period');
		var textOrbital_period = document.createTextNode(bigData.orbital_period);
		orbital_period.append(textOrbital_period);
		

        //get container fromhtnl page
		var container = document.getElementsByClassName('container')[0];

		//append request content to container from html
		container.append(name);
		container.append(gravity);
		container.append(population);
		container.append(orbital_period);
}




loadPlanet();

        document.getElementById('backToIndex').addEventListener('click', function() {
        	window.location.href = "index.html";

        })


})();




