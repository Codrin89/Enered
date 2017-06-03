(function(){
	var button = document.getElementById('hide1');
	button.onclick = function(){
		 document.getElementById('carousel').style.display = 'none';
		
	
	};
	var button = document.getElementById('hide2');
	button.onclick = function(){
		document.getElementById('lastslider1').style.display = 'none';
	}
	var button = document.getElementById('hide');
	button.onclick = function(){
		document.getElementById('carousel').style.display = 'block';
		document.getElementById('lastslider1').style.display = 'block';
	}
		
	document.getElementById('add').addEventListener('click' , function(){
		var x = document.createElement('input');
   		x.setAttribute('type', 'text');
    	x.setAttribute('class', 'form-control');
    	document.getElementById('lastslider1').appendChild(x);
	});

	document.getElementById('sum').addEventListener('click' , function(){
		var inputs = document.getElementsByClassName('form-control');
		var sum = 0;
		for(var i = 0 ; i < inputs.length ; i++) {
			sum += parseInt(inputs[i].value);
		}
		document.getElementById('result').innerHTML = sum;

	});


})();