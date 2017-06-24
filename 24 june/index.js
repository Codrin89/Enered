(function() {

		var data = {
			"user": "Marius",
			"address": "pe langa Garibaldi",
			"age": "marius@marius.com",
			"occupation": [
				'lineage',
				'exalted',
				'dota mai nou'
			]
		}
	document.getElementsByClassName('btn-success')[0].addEventListener('click',function() {
		getDataFromPage();
	});

	function populateSomething() {
		var Data = {};
		document.getElementById('username').value = data.user;
		document.getElementById('address').value = data.address;
		document.getElementById('age').value = data.age;
	
		for(var i = 0; i < 3;i++) {
			document.getElementsByClassName('occupation')[i].value = data.occupation[i];
		}
	}

	populateSomething();
	function getDataFromPage() {
		var formData = {};													//POST-trimiti date!!!! Get-da-mi date.


		formData.username = document.getElementById('username').value;  //crearea de obiecte
		formData.address = document.getElementById('address').value;
		formData.email = document.getElementById('email').value;
		formData.age = document.getElementById('age').value;
		formData.occupation = [];
		for(var i =0; i < 3;i++) {
			formData.occupation.push(document.getElementsByClassName('occupation')[i].value);  //push!!
		}
		console.log(formData);

	}

	function sendData() {
		//Javascript
		var xhr = XMLHttpRequest();  //format prin care trimiti
		whttp.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200){
				document.getElementById("demo").innerHTML = xhttp.responseText;
			}
		};
		xhttp.open("POST", "http://dakkljnoln.com", true);
		xhttp.send(formData);

		//JQUERY
		$.ajax({
			method: "GET",
			url: "http://bla.com",
			data: formData
		});
	}


})();