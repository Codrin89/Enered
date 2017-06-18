(function(){
   var items1 = [
       {
       	  "title": "This is the first item title",
       	  "description": "First description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"

       },
       {
       	  "title": "This is the second item title",
       	  "description": "Second description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
       },
       {
       	  "title": "This is the third item title",
       	  "description": "Third description lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet"
       }

   ];

   var items2 = [
       {
       	  "title": "This is the first form",
       	  "name": "Marius",
       	  "password": "password",
       	  "submit": "Submit"
       },
       {
       	  "title": "This is the second form",
       	  "name": "MADALINA",
       	  "password": "atentaladetalii",
       	  "submit": "Submit"
       },
       {
       	  "title": "This is the third form",
       	  "name": "Teddy",
       	  "password": "1234",
       	  "submit": "Login"
       }
   ]

   function createDescription(elementsLength){
   	  for(var i=0; i < elementsLength; i++){
   	  	var divBox = document.createElement('div');
   	  	divBox.setAttribute('class', 'description-wrapper');

   	  	var titleH1 = document.createElement('h1');
   	  	titleH1.setAttribute('class', 'text-center');
   	  	var titleH1Text = document.createTextNode(items1[i].title);
   	  	titleH1.append(titleH1Text);
   	  	divBox.append(titleH1);

   	  	var pdescr = document.createElement('p');
   	  	var pdescrText = document.createTextNode(items1[i].description);
   	  	pdescr.append(pdescrText);
   	  	divBox.append(pdescr);



   	  	document.getElementsByClassName('firstdiv')[0].append(divBox);




   	  }
   }
   function createInputs(elementsLength){
   	  for(var i=0; i < elementsLength; i++){
   	  	var divBox = document.createElement('div');
   	  	divBox.setAttribute('class', 'form-wrapper');

   	  	var titleH1 = document.createElement('h1');
   	  	titleH1.setAttribute('class', 'text-center');
   	  	var titleH1Text = document.createTextNode(items2[i].title);
   	  	titleH1.append(titleH1Text);
   	  	divBox.append(titleH1);

   	  	var input1 = document.createElement('input');
   	  	input1.setAttribute('class', 'form-control');
   	  	input1.setAttribute('type', 'text');
   	  	input1.setAttribute('placeholder', 'Name');
   	  	input1.setAttribute('value', items2[i].name);

   	  	var input2 = document.createElement('input');
   	  	input2.setAttribute('class', 'form-control');
   	  	input2.setAttribute('type', 'password');
   	  	input2.setAttribute('placeholder', 'password');
   	  	input2.setAttribute('value', items2[i].password);

   	  	var button = document.createElement('button');
   	  	button.setAttribute('class', 'btn btn-default');
   	  	button.setAttribute('type', 'submit');
   	  	var buttonText = document.createTextNode(items2[i].submit);
   	  	button.append(buttonText);

   	  

   	    
   	  	divBox.append(input1);
   	  	divBox.append(input2);
   	  	divBox.append(button);

   	  
       

   	  	document.getElementsByClassName('seconddiv')[0].append(divBox);
     

   	  }
   }
    function createForm(){
     var buttons = document.getElementsByTagName('button');
     for(var j=0;j<buttons.length;j++){
     	buttons[j].addEventListener('click', function(){
     		if(this.parentElement.getElementsByTagName('p').length >0){
     			this.parentElement.removeChild(this.parentElement.lastChild);
     		}
     		var inputs = this.parentElement.getElementsByTagName('input');
     		var textNode = document.createTextNode("Name: "+ inputs[0].value + " Password: " + inputs[1].value);
     		var paragraph = document.createElement('p');
     		paragraph.append(textNode);
     		this.parentElement.append(paragraph);
     	}) 
     } 
   	}
   
   createDescription(3);
   createInputs(3);
   createForm();

   

})();