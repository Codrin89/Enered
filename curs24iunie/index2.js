(function() {
	var data = {
		"user" : "Diana Noaptea Mintii",
		"password" : "1234",
		"city" : "Iasi",
		"country" : "Romania",
		"zipcode" : "700200",
		"description" : "This is my profile description all in all.leorem ipsum lorem ipsum lorem ipsum"
		
	}

	function populateFields() {
		document.getElementById('user').value = data.user;
		document.getElementById('user2').value = data.user2;
		document.getElementById('password').value = data.password;
		document.getElementById('city').value = data.city;
		document.getElementById('country').value = data.country;
		document.getElementById('zipcode').value = data.zipcode;
		document.getElementById('description').value = data.description;
	
	}
	populateFields();
document.getElementsByClassName('btn-success')[0].addEventListener('click',function() {
		getDataFromPage();
	});
     
	  function getDataFromPage() {
	       var formData = {};
	       console.log(formData);
	       formData.user = document.getElementById('user').value;
	       formData.user2 = document.getElementById('user2').value;
	       formData.password = document.getElementById('password').value;
	       formData.city = document.getElementById('city').value;
	       formData.country = document.getElementById('country').value;
	       formData.zipcode = document.getElementById('zipcode').value;
	       formData.description = document.getElementById('description').value;
	   
	       console.log(formData);
   }

   var stringData = 'Marius / Tedy / Diana / Andrei';
   var resultArray = stringData.split('/');
   console.log(resultArray);
   var reverseArray = resultArray.join('@ ');
   console.log(reverseArray);
   //var array = ['Marius' ,'Tedy' ,'Diana' , 'Andrei'];



    var splitText = data.user.split(' ');
 	//splitText[0];
 	//splitText[1];
 	document.getElementById('user').value = splitText[0] + ' ' + splitText[1];
 	document.getElementById('user2').value = splitText[2];
 	console.log(splitText);
 
})();