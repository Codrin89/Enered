(function(){

	var data = {
		"user" : "Georgiana Katrinel",
		"password" : "12347",
		"city" : "Iasi",
		"country" : "Romania",
		"zipcode" : "700722",
		"description" : "This is my profile description all in all. Lorem ipsum bla bla bla"
	}

	function populateInputs(){
		document.getElementById('user').value = data.user;
		document.getElementById('password').value = data.password;
		document.getElementById('city').value = data.city;
		document.getElementById('country').value = data.country;
		document.getElementById('zipcode').value = data.zipcode;
		document.getElementById('description').value = data.description;
	}
	populateInputs();

	document.getElementsByClassName('btn-success')[0].addEventListener('click',function(){
		getDataFromPage();  
	});

	function getDataFromPage(){
		var formData = {};
		//declaram array gol ca ulterior sa punem valori in el
		formData.user = document.getElementById('user').value + " " + document.getElementById('user2').value;
		//denumirea de dupa . se creeaza in automat in array, daca punem de doua ori aceeasi denumire se suprascrie prima cu a doua valoare
		formData.password = document.getElementById('password').value;
		formData.city = document.getElementById('city').value;
		formData.country = document.getElementById('country').value;
		formData.zipcode = document.getElementById('zipcode').value;
		formData.description = document.getElementById('description').value;
		
		
		console.log(formData);

	}

	// var stringData = 'Marius / Teddy / Diana / Andrei';
	// var resultArray = stringData.split('/');
	// //scos / dintre nume
	// console.log(resultArray);
	// var reverseArray = resultArray.join('@');
	// //unde era bara inlocui cu @
	// console.log(reverseArray);

	function splitKatrinel(){
		var stringgData = data.user;
		var resultArray = stringgData.split(' ');
		document.getElementById('user').value = resultArray[0];
		document.getElementById('user2').value = resultArray[1];

	}
	splitKatrinel();

	// function sendDataFromPage(){
	// 	var array = [];
	// 	array.push(document.getElementById('user').value);
	// 	array.push(document.getElementById('user2').value);
	// 	var joined = array.join(' ');

	// 	formData.user = joined;
	// }

	function manipulateData(){
		var string = 'Lorem ipsum . sit dolor . amet , something , something@';
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
	manipulateData()


})();