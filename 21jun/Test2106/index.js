(function() {
	
	var items= [
		{
			"title": "this is the title 1 ",
			"input1": "adelina",
			"input2": "adelina",
			"input3": "1234",
		},
		{
			"title": "this is the title 2 ",
			"input1": "adelina2",
			"input2": "adelina2",
			"input3": "146356544",
		},
		{
			"title": "this is the title 3",
			"input1": "adelina3",
			"input2": "adelina3",
			"input3": "1276575634",
		}
	];
   
  
   document.getElementById('createElements').addEventListener('click',function createElements(elementsLength){
   function createElements(elementsLength){
   	   for(var i=0;i<elementsLength;i++){
           var boxDiv = document.createElement('div');
   	  	   boxDiv.setAttribute('class','item col-md-3');

   	  	   var headerH1 = document.createElement('h1');
   	  	   headerH1.setAttribute('class','text-center');
   	  	   var headerH1Text = document.createTextNode(items[i].title);
   	  	   headerH1.append(headerH1Text);
   	  	   boxDiv.append(headerH1);

   	  	   var input1 = document.createElement('input');
   	  	   input1.setAttribute('class','form-control');
   	  	   input1.setAttribute('name','name');
   	  	   input1.setAttribute('type','text');
   	  	   input1.setAttribute('value',items[i].input1);
   	  	   boxDiv.append(input1);

   	  	   var input2 = document.createElement('input');
   	  	   input2.setAttribute('class','form-control');
   	  	   input2.setAttribute('name','prenume');
   	  	   input2.setAttribute('type','text');
   	  	   input2.setAttribute('value',items[i].input2);
   	  	   boxDiv.append(input2);

   	  	   var input3 = document.createElement('input');
   	  	   input3.setAttribute('class','form-control');
   	  	   input3.setAttribute('name','parola');
   	  	   input3.setAttribute('type','password');
   	  	   input3.setAttribute('value',items[i].input3);
   	  	   boxDiv.append(input3);

   	  	   var button = document.createElement('button');
   	  	   button.setAttribute('class','btn btn-warning');
   	  	   var buttonText = document.createTextNode("Give me data");
   	  	   button.append(buttonText);
   	  	   boxDiv.append(button);

   	  	   var p = document.createElement('p');
   	  	   var pText = document.createTextNode("Inputs results:");
   	  	   p.append(pText);
   	  	   boxDiv.append(p);

   	  	   document.getElementsByClassName('container')[0].append(boxDiv);



   	   }

   }
   createElements(3);

   
   function createForm(){
     var buttons = document.getElementsByClassName('btn btn-warning');
     for(var j=0;j<buttons.length;j++){
      buttons[j].addEventListener('click', function(){
      
         var inputs = this.parentElement.getElementsByTagName('input');
         this.parentElement.getElementsByTagName('p')[0].innerHTML= "Nume: "+ inputs[0].value + " Prenume: " + inputs[1].value + " Password: " + inputs[2].value;
      }) 
     } 
   }

   createForm();  

  })



  document.getElementById('button').addEventListener('click',function(){
      var stil= document.getElementById('footer-text');
      if(stil.style.display === "block"){
         stil.style.display = "none";
         document.getElementById("myi").className = "glyphicon glyphicon-arrow-right";


      } else{
         stil.style.display = "block";
         document.getElementById("myi").className = "glyphicon glyphicon-arrow-down";
      }
  })

  


})();