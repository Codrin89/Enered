(function(){

var items = [
	{
		"id": 4132,
		"Email": "johnishappy@johntheguy.com",
		"FirstName": "John",
		"LastName": "Doe",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 5132,
		"Email": "criscatinca@catinca.com",
		"FirstName": "Cristina",
		"LastName": "Catinca",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 6132,
		"Email": "ileanalong-email@longileana.com",
		"FirstName": "Ileana",
		"LastName": "Long",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 4132,
		"Email": "johnishappy@johntheguy.com",
		"FirstName": "John",
		"LastName": "Doe",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 5132,
		"Email": "criscatinca@catinca.com",
		"FirstName": "Cristina",
		"LastName": "Catinca",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 6132,
		"Email": "ileanalong-email@longileana.com",
		"FirstName": "Ileana",
		"LastName": "Long",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 4132,
		"Email": "johnishappy@johntheguy.com",
		"FirstName": "John",
		"LastName": "Doe",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 5132,
		"Email": "criscatinca@catinca.com",
		"FirstName": "Cristina",
		"LastName": "Catinca",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 6132,
		"Email": "ileanalong-email@longileana.com",
		"FirstName": "Ileana",
		"LastName": "Long",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 4132,
		"Email": "johnishappy@johntheguy.com",
		"FirstName": "John",
		"LastName": "Doe",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 5132,
		"Email": "criscatinca@catinca.com",
		"FirstName": "Cristina",
		"LastName": "Catinca",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	},
	{
		"id": 6132,
		"Email": "ileanalong-email@longileana.com",
		"FirstName": "Ileana",
		"LastName": "Long",
		"PhotoUrl": "fata.png",
		"Creation": "2h"
	}
  ];

/*<div class="profile-box ">
				<img src="fata.png">
				<h3>Jane Doe</h3>
				<p class="creation-date">Added 2 years ago</p>
				<p class="mail">EMAIL</p>
				<p class="email">jane.doe@feel-it-service.com</p>
				<button class="delete">Delete Admin</button>
			</div>*/


	function createElementJs() {
		for(var i = 0 ; i < items.length ; i++) {
			var box = document.createElement('div');
			box.setAttribute('class', 'profile-box');

			var image = document.createElement('img');
			image.setAttribute('src', items[i].PhotoUrl);

			var heading3 = document.createElement('h3');
			var heading3Text = document.createTextNode(items[i].FirstName + ' ' + items[i].LastName);
			heading3.append(heading3Text);


			var paragraf = document.createElement('p');
			paragraf.setAttribute('class','creation-date');
			var paragrafText = document.createTextNode('Added' + items[i].CreationDate + 'ago');
			paragraf.append(paragrafText);

			var paragraf1 = document.createElement('p');
			paragraf1.setAttribute('class','mail');
			var paragraf1Text = document.createTextNode(items[i].EMAIL);
			paragraf1.append(paragraf1Text);

			var paragraf2 = document.createElement('p');
			paragraf2.setAttribute('class','email');
			var paragraf2Text = document.createTextNode(items[i].Email);
			paragraf2.append(paragraf2Text);


			var deleteButton = document.createElement('button');
			var deleteText = document.createTextNode('Delete Admin');
			deleteButton.append(deleteText);
			deleteButton.setAttribute('class','delete');


			box.append(image);
			box.append(heading3);
			box.append(paragraf);
			box.append(paragraf1);
			box.append(paragraf2);
			box.append(deleteButton);

			document.getElementsByClassName('content-wrapper')[0].append(box);




		}
			
	}
	 createElementJs();	
			
})();
