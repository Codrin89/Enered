(function(){
	var data = {
		"user": "Marius",
		"address" : "pe langa Garibaldi",
		"age" : "14",
		"email" : "marius@marius.com",
		"occupation" : [
			'lineage',
			'exalted',
			'dota mai nou'
		]
	}
	function populateInputs(){
		document.getElementById('username').value = data.user;
		document.getElementById('address').value = data.address;
		document.getElementById('email').value = data.email;
		document.getElementById('age').value = data.age;
		for(var i=0;i<3;i++){
		document.getElementsByClassName('occupation')[i].value = data.occupation[i];
		}

	}
	populateInputs();



	document.getElementsByClassName('btn-success')[0].addEventListener('click',function(){
		getDataFromPage();  
	});

	function getDataFromPage(){
		var formData = {};
		//declaram array gol ca ulterior sa punem valori in el
		console.log(formData);
		formData.username = document.getElementById('username').value;
		//denumirea de dupa . se creeaza in automat in array, daca punem de doua ori aceeasi denumire se suprascrie prima cu a doua valoare
		formData.address = document.getElementById('address').value;
		formData.email = document.getElementById('email').value;
		formData.age = document.getElementById('age').value;
		formData.occupation = [];
		for(var i=0;i<3;i++){
			formData.occupation.push(document.getElementsByClassName('occupation')[i].value);
			//push folosesc de fiecare data cand bag ceva in array
			// nu uita cand targhetezi un array sau iei elemente dupa clasa sa pui si pozitia, ex: [0] !!!
		}
		console.log(formData);

	}

	function sendData(){
		//JAVASCRIPT
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
       			// Typical action to be performed when the document is ready:
       			document.getElementById("demo").innerHTML = xhttp.responseText;
   			}
		};
		xhttp.open("POST", "http://asdadasfa.com", true);
		xhttp.send(formData);

		//JQUERY	
		$.ajax({
			method: "GET",
			url: "http://blabla.com",
			data: formData
			});
	}
})();


// CRUD - create, read, update, delete;
// POST - trimit date; cel de pe server le analizeaza si trimite un rasp;
// GET - iau date;
// DELETE 
// http statusuri de cautat pt a afla semnificatia codului de status