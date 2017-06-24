(function() {
	var data = {
		"user" : "Marius",
		"address" : "aaaaaaaaaaaaaaaaa",
		"age" : "14",
		"email" : "Marius.com",
		"occupation" : [
			'alabala',
			'blabla',
			'lalala'
		]
	}
	function populateFields() {
		document.getElementById('username').value = data.user;
		document.getElementById('address').value = data.address;
		document.getElementById('age').value = data.age;
		document.getElementById('email').value = data.email;
	 for(var i = 0 ; i < data.occupation.length ; i++) {
	 	document.getElementsByClassName('occupation')[i].value = data.occupation[i];
	 }
	}
	populateFields();

	document.getElementsByClassName('btn-success')[0].addEventListener('click',function() {
		getDataFromPage();
	});
       function getDataFromPage() {
	       var formData = {};
	       console.log(formData);
	       formData.username = document.getElementById('username').value;
	       formData.address = document.getElementById('address').value;
	       formData.email = document.getElementById('email').value;
	       formData.age = document.getElementById('age').value;
	       formData.occupation = [];
	       for(var i = 0 ; i < 3 ; i++) {
	       	formData.occupation.push(document.getElementsByClassName('occupation')[i].value);
	       }
	       console.log(formData);
   }

   	function sendData() {
   		//JAVASCRIPT
   		var xhr = XMLHttpRequest();
   		xhttp.onreadystatechange = function() {
   			if(this.readyState == 4 && this.status == 200) {
   				document.getElementById("demo").innerHTML = xhttp.responseText;
   			}
   		};
   		xttp:open("POST", "http://fastahsjsk.com", true);
   		xttp.send(formData);
   		//JQUERY
   		$.ajax({
   			method: "POST",
   			url: "http://blabla.com",
   			data: formData
   			});
   	}
})();