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

	function createElementJs() {
		for(var i = 0 ; i < items.length ; i++) {
			var box = document.createElement('div');
			box.setAttribute('class', 'item col-md-3');

			var heading = document.createElement('h1');
			heading.setAttribute('class','text-center');
			var headingText = document.createTextNode(items[i].title);
			heading.append(headingText);

			var input1 = document.createElement('input');
			input1.setAttribute('class','form-control');
			input1.setAttribute('type', 'text');
			input1.setAttribute('placeholder', 'Name');
			input1.setAttribute('value', items[i].input1);

			var input2 = document.createElement('input');
			input2.setAttribute('class','form-control');
			input2.setAttribute('type', 'text');
			input2.setAttribute('placeholder', 'Prenume');
			input2.setAttribute('value', items[i].input2);

			var input3 = document.createElement('input');
			input3.setAttribute('class','form-control');
			input3.setAttribute('type', 'text');
			input3.setAttribute('placeholder', 'Parola');
			input3.setAttribute('value', items[i].input3);


			var buton = document.createElement('button');
			buton.setAttribute('class','btn btn-warning');
			var butonText = document.createTextNode('give me data');
			buton.append(butonText);

			var paragraf = document.createElement('p');
			var paragrafText = document.createTextNode('Inputs Results');
			paragraf.append(paragrafText);


			box.append(heading);
			box.append(input1);
			box.append(input2);
			box.append(input3);
			box.append(paragraf);
			box.append(buton);


			document.getElementsByClassName('container')[0].append(box);

		}
	bindEvent();
	}

	 


		document.getElementById('createElements').addEventListener('click',function(){
		 createElementJs(3);
	});


		function createElementJs2() {
		for(var i = 0 ; i < items2.length ; i++) {
			var box2 = document.createElement('div');
			box2.setAttribute('class', 'openClose');

			var buton2 = document.createElement('button');
			buton2.setAttribute('class','btn btn-primary');
			var buton2Text = document.createTextNode(items2[i].submit);
			buton2.append(buton2Text);

			var icon = document.createElement('i');
			icon.setAttribute('class','glyphicon glyphicon-down');
			var iconText = document.createTextNode(items2[i].title);
			icon.append(iconText);


			var paragraf2 = document.createElement('p');
			paragraf2.setAttribute('class','text-right');
			var paragraf2Text = document.createTextNode('This is the footer');
			paragraf2.append(paragraf2Text);





			box2.append(buton);
			box2.append(paragraf);
			box2.append(icon);

			document.getElementsByClassName('footer')[0].append(box2);


	

		}
	}
 
	 
	  createElementJs2();


	  	function bindEvent() {
				var buttons = document.getElementsByTagName('button');
				for(var i = 0 ; i < buttons.length ; i++) {
					buttons[i].addEventListener('click',function(){
					if(this.parentElement.getElementsByTagName('p') > 0) {
						this.parentElement.removeChild(this.parentElement.lastChild);
					}
					var inputs = this.parentElement.getElementsByTagName('input');
					var textNode = document.createTextNode('name: ' + inputs[0].value + ' name2 : ' + inputs[1].value  + ' password : ' +  inputs[2].value);
					var paragraph = document.createElement('p');
					paragraph.append(textNode);
					this.parentElement.append(paragraph);

				});
			}
		}

	document.getElementById('footer1').addEventListener('click', function(){
      	 var hide = document.getElementById('footer-info1');
			if (hide.style.display === 'block') {
  				  hide.style.display = 'none';
				}
					else {
   				 hide.style.display = 'block';
			}
		 });

})();

	
