(function() {

		var data = {
			"user": "Dragalasu 47",
			"password": "123456",
			"city": "Iasi",
			"country": "Romania",
			"zipcode": "700722",
			"description": "This is my profile description all in all.Lorem ipsum dmdmdmmd"
		}
		document.getElementsByClassName('btn-primary')[0].addEventListener('click',function() {
			getDataFromPage();
		});

		document.getElementsByClassName('btn-danger')[0].addEventListener('click',function() {
			getDataFromPage2();
		});
		

		function getDataFromPage() {
			var splitText = data.user.split(' ');  //iau din pagina
			document.getElementById('nume').value = splitText[0];
			document.getElementById('prenume').value = splitText[1];
			document.getElementById('password').value = data.password;
			document.getElementById('city').value = data.city;
			document.getElementById('country').value = data.country;
			document.getElementById('zipcode').value = data.zipcode;
			document.getElementById('description').value = data.description;
		}

		function getDataFromPage2() {  //pun in pagina
			var formData = {};	
			console.log(formData);	
			formData.user = document.getElementById('nume').value + document.getElementById('prenume').value;

			// formData.user = document.getElementById('username').value;  
			formData.password = document.getElementById('password').value;
			formData.city = document.getElementById('city').value;
			formData.country = document.getElementById('country').value;
			formData.zipcode = document.getElementById('zipcode').value;
			formData.description = document.getElementById('description').value;
			console.log(formData);
		}

		// var stringData = 'Marius / Teddy / Diana / Andrei';
		// var resultArray = stringData.split('/');  //split-cauta in array!!!
		// console.log(resultArray);
		// var reverseArray = resultArray.join('@'); //functii de baza!! split&join (de vazut)
		// console.log(reverseArray);

		function manipulateData() {
			var string = 'Lorem ipsum . sit dolar . amet , something ,something';
			var string1 = string;
			var string2 = string;
			var string3 = string;
			var split1 = string1.split('.');
			console.log(split1);
			var split2 = string2.split(',');
			console.log(split2);
			var split3 = string3.split('@');
			console.log(split3);


		}
		manipulateData();

		

})();