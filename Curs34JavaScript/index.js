(function(){

	var data = {
		"user" : "InkTec",
		"address" : "C.U.G.",
		"age" : "28",
		"email" : "InkTec@gmail.com",
		"ocupation" : [
			'lineage',
			'POE',
			'Gaming'
		]
	}
	document.getElementsByClassName('btn-success')[0].addEventListener('click', function(){
		getDataFromPage();
	});

	function pupulatePage() {
		
			document.getElementById('username').value = data.user;
			document.getElementById('address').value = data.address;
			document.getElementById('age').value = data.age;
			document.getElementById('email').value = data.email;
			document.getElementById('ocupation').value = [];
			for(var i = 0 ; i < 3 ; i++){
				document.getElementsByClassName('ocupation')[i].value = data.ocupation[i];
			}
		
	}
	pupulatePage();

	function getDataFromPage() {
		var formData = {};
		formData.username = document.getElementById('username').value;		
		formData.address = document.getElementById('address').value;		
		formData.email = document.getElementById('email').value;		
		formData.age = document.getElementById('age').value;
		formData.ocupation = [];
		for (var i = 0 ; i < 3 ; i++){
			formData.ocupation.push(document.getElementsByClassName('ocupation')[i].value);
		}
		console.log(formData);
	}

	function sendData() {

		//JAVASCRIPT
		var xhr = new XMLGttpRequest();
		xttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				document.getElementById('demo').innerHTML = xhttp.responseText;
			}
		}

		//JQUERY
		$.ajax({
			method : "POST",
			url : "https://",
			data : formData
		});
	}


})();