(function(){

	var items =  [
		{
			"id": 4132,
			"Email": "jhonhappy@jhontheguy.com",
			"FirstName": "Jhon",
			"LastName": "Doe",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 3131,
			"Email": "cristinacatinca@catinca.com",
			"FirstName": "Cristina",
			"LastName": "Catinca",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		},
		{
			"id": 7643,
			"Email": "leanabufnita@leana.com",
			"FirstName": "Leana",
			"LastName": "Bufnita",
			"PhotoUrl": "poza.jpg",
			"CreationDate": "2h"
		}

			
	]

function createElements () {
	//create elements

	for(var i = 0 ; i < items.length ; i++) {
		var profileBox = document.createElement('div');
		profileBox.setAttribute('class', 'profile-box');


		var image = document.createElement('img');
		image.setAttribute('src', items[i].PhotoUrl);

		var name = document.createElement('h3');
		var nameText = document.createTextNode(items[i].FirstName + ' ' + items[i].LastName);
		name.append(nameText);

		var creation = document.createElement('p');
		var creationText = document.createTextNode('Added ' + items[i].CreationDate + ' ago');
		creation.append(creationText);
		creation.setAttribute('class', 'creation-date');

		var email = document.createElement('p');
		var emailText = document.createTextNode(items[i].Email);
		email.append(emailText);
		email.setAttribute('class', 'email');





		var deleteButton = document.createElement('button');
		var deleteText = document.createTextNode('Delete Admin');
		deleteButton.append(deleteText);
		deleteButton.setAttribute('class', 'delete');

			//append elements inside div
		profileBox.append(image);
		profileBox.append(name);
		profileBox.append(creation);
		profileBox.append(email);
		profileBox.append(deleteButton);

		document.getElementsByClassName('content-wrapper')[0].append(profileBox);

	}

}


createElements ();


})();