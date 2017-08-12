(function(){

	var data = {
		"user" : "InkTec tralala",
		"password" : "12345",
		"city" : "Iasi",
		"country" : "Romania",
		"zipcode" : "700722",
		"description" : "this is my ptofile description all in all. Lorem ipsum bla bla bla"
	}
	
		
		function pupulatePage(){
			var splitText = data.user.split(' ');
			document.getElementById('user').value = splitText[0];
			document.getElementById('secondname').value = splitText[1];

			document.getElementById('password').value = data.password;
			document.getElementById('city').value = data.city;
			document.getElementById('country').value = data.country;
			document.getElementById('zipcode').value = data.zipcode;
			document.getElementById('description').value = data.description;
	  
	}

pupulatePage();
	document.getElementsByClassName('btn-success')[0].addEventListener('click', function(){
		getDataFromPag();
	});
	function getDataFromPag () {
		var formData = {};
		//with .join
		var array = [];
		array.push(document.getElementById('user').value);
		array.push(document.getElementById('secondname').value);
		var joined = array.join(' ');
		console.log(joined);

		formData.user = document.getElementById('user').value + ' ' + document.getElementById('secondname').value;

		formData.password = document.getElementById('password').value;
		formData.city = document.getElementById('city').value;
		formData.country = document.getElementById('country').value;
		formData.zipcode = document.getElementById('zipcode').value;
		formData.description = document.getElementById('description').value;

		console.log(data);
		
	}
	var stringData = "Marius / Tedy / InkTec / PureInk";

	var resultArray = stringData.split('/');
		console.log(resultArray);
	var reverseArray = resultArray.join('@');
		console.log(reverseArray);
		
	function manipulateData() {
		var string = 'lore ipsum . sit dolor . amet , something , something@';
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