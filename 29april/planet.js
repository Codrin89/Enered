(function(){

   var planetID = window.location.href.split('?')[1];


   function loadPlanet(){
   	   var xhr = new XMLHttpRequest();
   	   xhr.onreadystatechange = function(){
   	   	   if (this.readyState == 4 && this.status == 200) {
   	   	   	   createPlanet(JSON.parse(xhr.responseText));
   	   	   }
   	   };
   	   xhr.open("GET", "http://swapi.co/api/planets/" + planetID , true);
   	   xhr.send();
   }

   function createPlanet(bigData){
   	   var name = document.createElement('h3');
   	   name.setAttribute('class', 'name');
   	   var textName = document.createTextNode(bigData.name);
   	   name.append(textName);

       //get container from html page
   	   var container = document.getElementsByClassName('container')[0];


   	   var climate = document.createElement('p');
   	   climate.setAttribute('class', 'climate');
   	   var textClimate = document.createTextNode('Climate: ' + bigData.climate);
   	   climate.append(textClimate);

   	   var diameter = document.createElement('p');
   	   diameter.setAttribute('class', 'diameter');
   	   var textDiameter = document.createTextNode('Diameter: ' + bigData.diameter);
   	   diameter.append(textDiameter);

   	   var gravity = document.createElement('p');
   	   gravity.setAttribute('class', 'gravity');
   	   var textGravity = document.createTextNode('Gravity: ' + bigData.gravity);
   	   gravity.append(textGravity);

   	   var orbital_period = document.createElement('p');
   	   orbital_period.setAttribute('class', 'orbital_period');
   	   var textOrbital_period = document.createTextNode('Orbital period: ' + bigData.orbital_period);
   	   orbital_period.append(textOrbital_period);

   	   var population = document.createElement('p');
   	   population.setAttribute('class', 'population');
   	   var textPopulation = document.createTextNode('Population: ' + bigData.population);
   	   population.append(textPopulation);

   	   var terrain = document.createElement('p');
   	   terrain.setAttribute('class', 'terrain');
   	   var textTerrain = document.createTextNode('Terrain: ' + bigData.terrain);
   	   terrain.append(textTerrain);




   	   //append request content to container from html
   	   container.append(name);
   	   container.append(climate);
   	   container.append(diameter);
   	   container.append(gravity);
   	   container.append(orbital_period);
   	   container.append(population);
   	   container.append(terrain);

   }

   loadPlanet();


 
})();