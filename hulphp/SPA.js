(function() {



	function init() {
		document.getElementById('goToRegister').addEventListener('click', redirectToRegister);
		document.getElementById('loginButton').addEventListener('click', clickOnLogin);
	}

	function redirectToRegister() {
		//remove events from login
		document.getElementById('goToRegister').removeEventListener('click', redirectToRegister);
		document.getElementById('loginButton').removeEventListener('click', clickOnLogin);

		//show register section , hide login section
		document.getElementsByClassName('loginContainer')[0].classList.add('displayNone');
		document.getElementsByClassName('registerContainer')[0].classList.remove('displayNone');

		//return to login add event listener
		document.getElementById('goToLogin').addEventListener('click', redirectToLogin);
		document.getElementById('registerButton').addEventListener('click', clickOnRegister);
	}

	function redirectToLogin() {
		// remove events from register 
		document.getElementById('goToLogin').removeEventListener('click', redirectToLogin);

		//show login section , hider register section
		document.getElementsByClassName('registerContainer')[0].classList.add('displayNone');
		document.getElementsByClassName('loginContainer')[0].classList.remove('displayNone');

		//init login again
		init();
	}
	
	function clickOnLogin() {
		var loginData = {
			"username": document.getElementById('name').value,
			"password": document.getElementById('password').value
		}

		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'http://localhost/api/login-data', true);

		xhr.onreadystatechange = function() {//Call a function when the state changes.
		    if(xhr.readyState == 4 && xhr.status == 200) {
		    	if(xhr.responseText == 'Successfully logged in') {
	    			document.getElementsByClassName('loginContainer')[0].classList.add('displayNone');
	    			document.getElementsByClassName('mainPage')[0].classList.remove('displayNone');
		    	}
		    }
		}
		xhr.send(JSON.stringify(loginData));
	}

	function clickOnRegister() {
		var errorOnRegister = false;
		var inputs = document.getElementsByClassName('registerContainer')[0].getElementsByClassName('form-control');
		for(var i = 0 ; i < inputs.length ; i++) {
			if(inputs[i].value == '') {
				errorOnRegister = true;
				inputs[i].classList.add('has-error');
			}
		}
		if(errorOnRegister == false) {
			var registerData = {
				"username":  document.getElementById('name').value,
				"email":  document.getElementById('email').value,
				"firstname":  document.getElementById('firstname').value,
				"lastname":  document.getElementById('lastname').value,
				"address":  document.getElementById('address').value,
				"date_of_birth":  document.getElementById('date_of_birth').value,
				"phone":  document.getElementById('phone').value,
				"country":  document.getElementById('country').value,
				"city":  document.getElementById('city').value,
				"gender":  document.getElementById('gender').value,
				"occupation":  document.getElementById('occupation').value,
				"password":  document.getElementById('password1').value,
				"password2":  document.getElementById('password2').value
			};
			

			var xhr = new XMLHttpRequest();
			xhr.open("POST", 'http://localhost/api/register-data', true);

			xhr.onreadystatechange = function() {//Call a function when the state changes.
			    if(xhr.readyState == 4 && xhr.status == 200) {
			    	console.log(xhr.responseText);
			    }
			}
			xhr.send(JSON.stringify(registerData));
		}
		
	}

	init();


})();