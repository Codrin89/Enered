(function(){

   document.getElementById('submitButton').addEventListener('click',function (){
   	   var formCheck = false;
       if (document.getElementById('userName').value == '') {
       	   document.getElementById('userName').parentElement.classList.add('has-error');
       	   formCheck = true;

       }  else {
       	document.getElementById('userName').parentElement.classList.remove('has-error');
       }


       if (document.getElementById('email').value == '') {
       	   document.getElementById('email').parentElement.classList.add('has-error');
       	   formCheck = true;

       }  else {
       	document.getElementById('email').parentElement.classList.remove('has-error');
       }
 
       if (document.getElementById('password').value == '') {
       	   document.getElementById('password').parentElement.classList.add('has-error');
       	   formCheck = true;

       }  else {
       	document.getElementById('password').parentElement.classList.remove('has-error');
       }
       if(formCheck) {
       	   alert('nu ai completat toate campurile!');
       } else {
       	   var myObject = {
       	   	username : document.getElementById('userName').value,
       	   	email : document.getElementById('email').value,
       	   	password : document.getElementById('password').value
       	   }
       	   console.log(myObject);
       	   myObject = JSON.stringify(myObject);
       	   console.log(myObject);
       	   myObject = JSON.parse(myObject);
       	   console.log(myObject);
       }

   });

   // document.getElementById('getData').addEventListener('click',function () {
   // 		getData();
   // })
   function getData(){
	   var xhr = new XMLHttpRequest();
	   xhr.onreadystatechange = function() {
	   	if (this.readyState == 4 && this.status == 200) {
	       createElements(JSON.parse(xhr.responseText));
	      // if (this.readyState == 4 && this.status == 200) {
	      //  console.log(xhr.responseText);// Action to be performed when the document is read; xhr.responseText
	      }
	   };
	   xhr.open("GET", "http://swapi.co/api/people/", true);
	   xhr.send();
   }
   function createElements(bigData){
   	  for (var i = 0; i< bigData.results.length; i++) {
   	  	createPerson(bigData.results[i]);
   	  }
   }
   function createPerson(personData){
   		console.log(personData);
   	  var divPerson = document.createElement('div');
   	  divPerson.setAttribute('class','person');



   	  var age = document.createElement('p');
   	  age.setAttribute('class','age');
   	  var textAge = document.createTextNode('Age:' + personData.birth_year);
   	  //append text to element
   	  age.append(textAge);
   	  

   	  var skin = document.createElement('p');
   	  skin.setAttribute('class','skin');
   	  var textSkin =document.createTextNode('Skin:'+ personData.skin_color);
   	  //append text to element
   	  skin.append(textSkin);
   	  

   	  var eye = document.createElement('p');
   	  eye.setAttribute('class','eye');
   	  var textEye =document.createTextNode('Eye color:' + personData.eye_color);
   	  //append text to element
   	  eye.append(textEye);
   	  

   	  var hair = document.createElement('p');
   	  hair.setAttribute('class','hair');
   	  var textHair =document.createTextNode('Hair color:' + personData.hair_color);
   	  //append text to element
   	  hair.append(textHair);

   	  var gender = document.createElement('p');
   	  gender.setAttribute('class','gender');
   	  var textGender =document.createTextNode('Gender:' + personData.gender);
   	  //append text to element
   	  gender.append(textGender);


   	  var height = document.createElement('p');
   	  height.setAttribute('class','height');
   	  var textHeight =document.createTextNode('Height:' + personData.height);
   	  //append text to element
   	  height.append(textHeight);


      var arrayHomeworld = personData.homeworld.split('/');
      var homeworldId = arrayHomeworld[arrayHomeworld.length - 2];
      var homeworld = document.createElement('a');
      homeworld.setAttribute('class','homeworld');
      homeworld.setAttribute('href','planet.html?' + homeworldId);
      var textHomeworld = document.createTextNode('Planet: ' + homeworldId);
      homeworld.append(textHomeworld);


      var arrayPeople = personData.url.split('/');
      var peopleId = arrayPeople[arrayPeople.length - 2];
      var people = document.createElement('a');
      people.setAttribute('class','people');
      people.setAttribute('href','name.html?' + peopleId);
      var textPeople = document.createTextNode(peopleId +': '+ personData.name);
      //append text to element
      people.append(textPeople);


       
      

      //person div append elements
   	  divPerson.append(people);
   	  divPerson.append(age);
   	  divPerson.append(skin);
   	  divPerson.append(eye);
   	  divPerson.append(hair);
   	  divPerson.append(gender);
   	  divPerson.append(height);
      divPerson.append(homeworld);

   	  //append to sw-list
   	  document.getElementsByClassName('sw-list')[0].append(divPerson);
   }
  getData();

})();