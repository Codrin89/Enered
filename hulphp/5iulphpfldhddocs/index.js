(function() {

	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://localhost/API/get-data', true);

	xhr.onreadystatechange = function() {//Call a function when the state changes.
	    if(xhr.readyState == 4 && xhr.status == 200) {
	    }
	}
	xhr.send();

	document.getElementsByClassName('btn-submit')[0].addEventListener('click', function() {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'http://localhost/api/post-data/'+document.getElementById('name').value+'/'+document.getElementById('password').value, true);

		xhr.onreadystatechange = function() {//Call a function when the state changes.
		    if(xhr.readyState == 4 && xhr.status == 200) {
		    }
		}
		xhr.send();
	});

	document.getElementById('GetItems').addEventListener('click', function() {
		//initialize xhr
		var xhr = new XMLHttpRequest();
		//send request endpoint & method
		xhr.open("GET", 'http://localhost/API/get-items', true);
		//listen for changes in the state of the xhr

		xhr.onreadystatechange = function() {//Call a function when the state changes.
		    if(xhr.readyState == 4 && xhr.status == 200) {
		    	console.log(xhr.responseText);
		    	console.log(JSON.parse(xhr.responseText));
		    	createData(JSON.parse(xhr.responseText));
		    }
		}
		//run xhr
		xhr.send();

		function createData(data){
          for(var i=0;i<data.length;i++){
          	var div = document.createElement('div');
          	div.setAttribute('class','data');

          	var name = document.createElement('h1');
          	name.setAttribute('class','name');
          	var textName = document.createTextNode(data[i].name);
          	name.append(textName);
          	div.append(name);

          	var age = document.createElement('p');
          	age.setAttribute('class','age');
          	var ageText = document.createTextNode('Age: '+ data[i].age);
          	age.append(ageText);
          	div.append(age);

          	var profession = document.createElement('p');
          	profession.setAttribute('class','profession');
          	var professionText = document.createTextNode('Profession: '+data[i].profession);
          	profession.append(professionText);
          	div.append(profession);



 			
 			document.getElementsByClassName('content')[0].append(div);
          }

		} 
	});
})();