(function() {

var planetID = window.location.href.split('?')[1];
console.log(planetID);

function loadPlanet() {
		var xhr = new XMLHttpRequest ();
		xhr.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				createPlanet(JSON.parse(xhr.responseText));
			}
		};
		xhr.open('GET','http://swapi.co/api/planets/ ' + planetID, true);
		xhr.send();
	}		
	function createPlanet(bigData){
		console.log(bigData);
		var name = document.createElement('h3');
		name.setAttribute('class' , 'name');
		var textName = document.createTextNode(bigData.name);
		name.append(textName);

		var climate = document.createElement('p');
		climate.setAttribute('class' , 'climate');
		var textClimate = document.createTextNode('climate:' + bigData.climate);
		climate.append(textClimate);

		var created = document.createElement('p');
		created.setAttribute('class' , 'created');
		var textCreated = document.createTextNode('created:' + bigData.created);
		created.append(textCreated);

		var diameter = document.createElement('p');
		diameter.setAttribute('class' , 'diameter');
		var textDiameter = document.createTextNode('diameter:' + bigData.diameter);
		diameter.append(textDiameter);

		var gravity = document.createElement('p');
		gravity.setAttribute('class' , 'gravity');
		var textGravity = document.createTextNode('gravity:' + bigData.gravity);
		gravity.append(textGravity);
		//get container from html page

		var container = document.getElementsByClassName('container')[0];

		//appened request content to container from html
		container.append(name);
		container.append(climate);
		container.append(created);
		container.append(diameter);
		container.append(gravity);
	}


	loadPlanet();

	document.getElementById('backToIndex').addEventListener('click',function(){
		window.location.href = 'index.html';
		
	});

})();

