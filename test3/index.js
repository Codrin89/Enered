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
	document.getElementById('creareElemente').addEventListener('click',function createElements(elementsLength){
		function createElements(elementsLength){
			for(var i=0;i<elementsLength;i++){
				var bigDiv =document.createElement('div');
				bigDiv.setAttribute('class','item col-md-3');

				var headerDiv =document.createElement('h1');
				headerDiv.setAttribute('class','text-center');
				var headerText= document.createTextNode(items[i].title);
				headerDiv.append(headerText);
				bigDiv.append(headerDiv);

				var inputNume = document.createElement('input');
				inputNume.setAttribute('type','text');
				inputNume.setAttribute('name','name');
				inputNume.setAttribute('class','form-control');
				inputNume.setAttribute('value',items[i].input1);
				bigDiv.append(inputNume);

				var inputPrenume = document.createElement('input');
				inputPrenume.setAttribute('type','text');
				inputPrenume.setAttribute('name','prename');
				inputPrenume.setAttribute('class','form-control');
				inputPrenume.setAttribute('value',items[i].input2);
				bigDiv.append(inputPrenume);

				var inputParola = document.createElement('input');
				inputParola.setAttribute('type','password');
				inputParola.setAttribute('name','parola');
				inputParola.setAttribute('class','form-control');
				inputParola.setAttribute('value',items[i].input3);
				bigDiv.append(inputParola);

				var btnGive = document.createElement('button');
	   	  	    btnGive.setAttribute('class','btn btn-warning');
	   	  	    var btnText = document.createTextNode("Give me data");
	   	  	    btnGive.append(btnText);
	   	  	    bigDiv.append(btnGive);

	   	  	    var padd = document.createElement('p');
	   	  	    var pText = document.createTextNode("Inputs results:");
	   	  	    padd.append(pText);
	   	  	    bigDiv.append(padd);

	   	  	    document.getElementsByClassName('container')[0].append(bigDiv);

			}
		}
	createElements(3);

	function informatii(){
		var btnWarning = document.getElementsByClassName('btn btn-warning');
		for(var j=0 ; j<btnWarning.length; j++){
			btnWarning[j].addEventListener('click',function(){
				var valori =this.parentElement.getElementsByTagName('input');
				this.parentElement.getElementsByTagName('p')[0].innerHTML= "Nume: "+ valori[0].value + " Prenume: " + valori[1].value + " Password: " + valori[2].value;
			})
		}
	}
	informatii();

	})


	// document.getElementById('button').addEventListener('click',function(){
	//       var stil= document.getElementById('footer-text');
	//       if(stil.style.display === "block"){
	//          stil.style.display = "none";
	//          document.getElementById("myi").className = "glyphicon glyphicon-arrow-right";


	//       } else{
	//          stil.style.display = "block";
	//          document.getElementById("myi").className = "glyphicon glyphicon-arrow-down";
	//       }
	//   })


})();