(function() {

	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", 'http://localhost/api/get-data', true);

	// xhr.onreadystatechange = function() {//Call a function when the state changes.
	//     if(xhr.readyState == 4 && xhr.status == 200) {
	//     }
	// }
	// xhr.send();

	// document.getElementsByClassName('btn-submit')[0].addEventListener('click', function() {
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.open("POST", 'http://localhost/api/post-data/'+document.getElementById('name').value+'/'+document.getElementById('password').value, true);

	// 	xhr.onreadystatechange = function() {//Call a function when the state changes.
	// 	    if(xhr.readyState == 4 && xhr.status == 200) {
	// 	    	console.log(JSON.parse());
	// 	    }
	// 	}
	// 	xhr.send();
	// });

	// document.getElementById('buttonGetItems').addEventListener('click', function(){ 
	// 	//intialize xhr
	// 	var xhr = new XMLHttpRequest();

	// 	// send reqyest endpoint & metod
	// 	xhr.open("GET", 'http://localhost/api/get-items', true);

	// 	//listen for changes in the state of the xhr
	// 	// se ruleaza ultima / se ruleaza de 4 ori
	// 	xhr.onreadystatechange = function(){
	// 		if(xhr.readyState == 4 && xhr.status == 200){
	// 			console.log(xhr.responseText);
	// 			console.log(JSON.parse(xhr.responseText));
	// 			createElements(JSON.parse(xhr.responseText));
	// 		}
	// 	}
	// 	// run xhr
	// 	xhr.send();	
	// });

	// function createElements(data) {
	// 	for(i = 0 ; i < data.length ; i ++){
	// 		var profileBox = document.createElement('div');

	// 		var name = document.createElement('h1');
	// 		var nameText = document.createTextNode(data[i].name);

	// 		name.append(nameText);

	// 		var age = document.createElement('p');
	// 		var ageText = document.createTextNode(data[i].age);

	// 		age.append(ageText);

	// 		var profetion = document.createElement('p');
	// 		var profetionText = document.createTextNode(data[i].profetion);

	// 		profetion.append(profetionText);

	// 		profileBox.append(name);
	// 		profileBox.append(age);
	// 		profileBox.append(profetion);

	// 		document.getElementsByClassName('container')[0].append(profileBox);

	// 	}
	// }


	document.getElementById('submit-register').addEventListener('click', function(){
		var registerData = {
			"username": document.getElementById('username').value,
			"name": document.getElementById('name').value,
			"firstname": document.getElementById('firstname').value,
			"lastname":document.getElementById('lastname').value,
			"email": document.getElementById('email').value,
			"address": document.getElementById('address').value,
			"date_of_birth": document.getElementById('date_of_birth').value,
			"phone": document.getElementById('phone').value,
			"country": document.getElementById('country').value,
			"city": document.getElementById('city').value,
			"gender": document.getElementById('gender').value,
			"occupation": document.getElementById('occupation').value,
			"password": document.getElementById('password').value,
			
		};
	var xhr = new XMLHttpRequest();
		xhr.open("POST", 'http://localhost/api/register-data', true);

		xhr.onreadystatechange = function() {//Call a function when the state changes.
		    if(xhr.readyState == 4 && xhr.status == 200) {
		    	console.log(xhr.responseText);
		    }
		}
		xhr.send(JSON.stringify(registerData));


		
	});
		
})();