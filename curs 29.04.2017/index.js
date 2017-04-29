(function(){

	document.getElementById('text').addEventListener('click',function(){
		var formCheck = false;
		if(document.getElementById('username').value ==''){
			document.getElementById('username').parentElement.classList.add('has-error');
           formCheck =true;
		}else{
			document.getElementById('username').parentElement.classList.remove('has-error')
		}
        
        

        if(document.getElementById('email').value ==''){
			document.getElementById('email').parentElement.classList.add('has-error');
           formCheck =true;
		}else{
			document.getElementById('email').parentElement.classList.remove('has-error')
		}
        
        

        if(document.getElementById('password').value ==''){
			document.getElementById('password').parentElement.classList.add('has-error');
           formCheck =true;
  		}else{
			document.getElementById('password').parentElement.classList.remove('has-error')
		}

  		


  		if(formCheck){
  			alert('nu ai completat toate campurile');
  		}else{
  			var myObject = {
  				username:document.getElementById('username').value,
  				email:document.getElementById('email').value,
  				password:document.getElementById('password').value,
  			}
  			console.log(myObject);
  			myObject =JSON.stringify(myObject);
  			console.log(myObject);
  			myObject =JSON.parse(myObject);
  			console.log(myObject);
  		}




	});
	

	document.getElementById('getData').addEventListener('click',function(){
		getData();
	})

	function getData(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	createElement(JSON.parse(xhr.responseText));
		   
		    }
		};
		xhr.open("GET", "http://swapi.co/api/people/", true);
		xhr.send();
	}
function createElement(bigData){
	for(var i =0 ;i<bigData.results.length ;i++){
		createPerson(bigData.results[i]);
	}
}
function createPerson(personData){
	var divPerson = document.createElement('div');
	divPerson.setAttribute('class','person');
	
	var name= document.createElement('h3');
	name.setAttribute('class','name');
	var textName =document.createTextNode(personData.name);
	name.append(textName);
	divPerson.append(name);

	var age= document.createElement('p');
	age.setAttribute('class','age');
	var textAge =document.createTextNode(personData.birth_year);
	age.append(textAge);
	divPerson.append(age);

	var skin= document.createElement('p');
	skin.setAttribute('class','skin');
	var textSkin =document.createTextNode(personData.skin_color);
	skin.append(textSkin);
	divPerson.append(skin);



	var eye= document.createElement('p');
	eye.setAttribute('class','eye');
	var textEye =document.createTextNode(personData.eye_color);
	eye.append(textEye);
	divPerson.append(eye);



    var hair= document.createElement('p');
	hair.setAttribute('class','hair');
	var textHair =document.createTextNode(personData.hair_color);
	hair.append(textHair);
	divPerson.append(hair);

	console.log(divPerson);

	document.getElementsByClassName('sw-list')[0].append(divPerson);



}


})();