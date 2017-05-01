(function(){
    var nameID = window.location.href.split('?')[1];

    function loadName() {
    	var xhr = new XMLHttpRequest();
    	xhr.onreadystatechange = function(){
    		if (this.readyState == 4 && this.status == 200) {
    			createName(JSON.parse(xhr.responseText));
    		}
    	};
    	xhr.open("GET", "http://swapi.co/api/people/" + nameID , true);
        xhr.send();
    }

    function createName(bigData){
    	var name = document.createElement('h3');
    	name.setAttribute('class','name');
    	var textName = document.createTextNode(bigData.name);
    	name.append(textName);

    //get container from html page
    var container = document.getElementsByClassName('container')[0];

    var age = document.createElement('p');
    age.setAttribute('class','age');
    var textAge = document.createTextNode('Age: ' + bigData.birth_year);
    age.append(textAge);

      var skin = document.createElement('p');
   	  skin.setAttribute('class','skin');
   	  var textSkin =document.createTextNode('Skin:'+ bigData.skin_color);
   	  //append text to element
   	  skin.append(textSkin);
   	  

   	  var eye = document.createElement('p');
   	  eye.setAttribute('class','eye');
   	  var textEye =document.createTextNode('Eye color:' + bigData.eye_color);
   	  //append text to element
   	  eye.append(textEye);
   	  

   	  var hair = document.createElement('p');
   	  hair.setAttribute('class','hair');
   	  var textHair =document.createTextNode('Hair color:' + bigData.hair_color);
   	  //append text to element
   	  hair.append(textHair);

   	  var gender = document.createElement('p');
   	  gender.setAttribute('class','gender');
   	  var textGender =document.createTextNode('Gender:' + bigData.gender);
   	  //append text to element
   	  gender.append(textGender);


   	  var height = document.createElement('p');
   	  height.setAttribute('class','height');
   	  var textHeight =document.createTextNode('Height:' + bigData.height);
   	  //append text to element
   	  height.append(textHeight);

   	  var arrayHomeworld = bigData.homeworld.split('/');
      var homeworldId = arrayHomeworld[arrayHomeworld.length - 2];
      var homeworld = document.createElement('a');
      homeworld.setAttribute('class','homeworld');
      homeworld.setAttribute('href','planet.html?' + homeworldId);
      var textHomeworld = document.createTextNode('Planet: ' + homeworldId);
      homeworld.append(textHomeworld);




    //append request content to container from html
    container.append(name);
    container.append(age);
    container.append(skin);
   	container.append(eye);
   	container.append(hair);
   	container.append(gender);
   	container.append(height);
   	container.append(homeworld);

    }

loadName();

document.getElementById('backToIndex').addEventListener('click',function(){
	window.location.href = "index.html";

});


})();