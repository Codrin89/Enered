(function() {

	document.getElementById('buton').addEventListener('click', function() {
		var loginData = {
		"username": document.getElementById('name').value,
		"password": document.getElementById('password').value
	}
		
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'http://localhost/api/login-data', true);

		xhr.onreadystatechange = function() {//Call a function when the state changes.
		    if(xhr.readyState == 4 && xhr.status == 200) {
		    	console.log(xhr.responseText);
		    }
		}
		xhr.send(JSON.stringify(loginData));

	
	});

})();