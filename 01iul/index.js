(function(){
	var data = {
	"items": [
       {
       		"id": 4132,
       		"Email": "johnishappy@johntheguy.com",
       		"FirstName": "John",
       	    "LastName": "Doe",
       	    "PhotoUrl": "assets/pic1.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 5132,
       		"Email": "criscatinca@catinca.com",
       		"FirstName": "Cristina",
       	    "LastName": "Catinca",
       	    "PhotoUrl": "assets/pic2.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 4132,
       		"Email": "johnishappy@johntheguy.com",
       		"FirstName": "John",
       	    "LastName": "Doe",
       	    "PhotoUrl": "assets/pic1.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 5132,
       		"Email": "criscatinca@catinca.com",
       		"FirstName": "Cristina",
       	    "LastName": "Catinca",
       	    "PhotoUrl": "assets/pic2.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 4132,
       		"Email": "johnishappy@johntheguy.com",
       		"FirstName": "John",
       	    "LastName": "Doe",
       	    "PhotoUrl": "assets/pic1.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 5132,
       		"Email": "criscatinca@catinca.com",
       		"FirstName": "Cristina",
       	    "LastName": "Catinca",
       	    "PhotoUrl": "assets/pic2.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 4132,
       		"Email": "johnishappy@johntheguy.com",
       		"FirstName": "John",
       	    "LastName": "Doe",
       	    "PhotoUrl": "assets/pic1.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 5132,
       		"Email": "criscatinca@catinca.com",
       		"FirstName": "Cristina",
       	    "LastName": "Catinca",
       	    "PhotoUrl": "assets/pic2.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 4132,
       		"Email": "johnishappy@johntheguy.com",
       		"FirstName": "John",
       	    "LastName": "Doe",
       	    "PhotoUrl": "assets/pic1.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 5132,
       		"Email": "criscatinca@catinca.com",
       		"FirstName": "Cristina",
       	    "LastName": "Catinca",
       	    "PhotoUrl": "assets/pic2.jpg",
       	    "CreationDate": "2h"
       },
       {
       		"id": 4132,
       		"Email": "johnishappy@johntheguy.com",
       		"FirstName": "John",
       	    "LastName": "Doe",
       	    "PhotoUrl": "assets/pic1.jpg",
       	    "CreationDate": "2h"
       }
	]
}

   function createElements(elementsLength){
   	   for(var i=0;i<elementsLength;i++){
           var boxDiv = document.createElement('div');
   	  	   boxDiv.setAttribute('class','profile-box');

   	  	   var boxImg = document.createElement('div');
   	  	   boxImg.setAttribute('class','img');
   	  	   boxDiv.append(boxImg);

   	  	   var img = document.createElement('img');
   	  	   img.setAttribute('src','pic.jpg');
   	  	   boxImg.append(img);

   	  	   var boxText = document.createElement('div');
   	  	   boxText.setAttribute('class','text');
   	  	   boxDiv.append(boxText);

   	  	   var headerH3 = document.createElement('h3');
   	  	   var headerH3Text = document.createTextNode(data.items[i].FirstName + " " + data.items[i].LastName);
   	  	   headerH3.append(headerH3Text);
   	  	   boxText.append(headerH3);

   	  	   var p1 = document.createElement('p');
   	  	   p1.setAttribute('class','creation-date');
   	  	   boxText.append(p1);

   	  	   var i1 = document.createElement('i');
   	  	   var i1Text = document.createTextNode('Added '+ data.items[i].CreationDate +' ago');
   	  	   i1.append(i1Text);
   	  	   p1.append(i1);

   	  	   var headerH4 = document.createElement('h4');
   	  	   var headerH4Text = document.createTextNode('EMAIL');
   	  	   headerH4.append(headerH4Text);
   	  	   boxText.append(headerH4);

   	  	   var p2 = document.createElement('p');
   	  	   p2.setAttribute('class','email');
   	  	   var p2Text = document.createTextNode(data.items[i].Email);
   	  	   p2.append(p2Text);
   	  	   boxText.append(p2);
   	  	   
   	  	   var button = document.createElement('button');
   	  	   button.setAttribute('class','delete');
   	  	   boxText.append(button);

   	  	   var img1 = document.createElement('img');
   	  	   img1.setAttribute('id','del');
   	  	   img1.setAttribute('src','delet.png');
   	  	   button.append(img1);

   	  	   var p3 = document.createElement('p');
   	  	   p3.setAttribute('class','lab');
   	  	   var p3Text = document.createTextNode("Delete admin");
   	  	   p3.append(p3Text);
   	  	   button.append(p3);

   	  	   document.getElementsByClassName('content-wrapper')[0].append(boxDiv);



   	   }

   }
   createElements(12);
})();
 