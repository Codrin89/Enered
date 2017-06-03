(function(){
	document.getElementById('btn1').addEventListener('click', function(){
		document.getElementById('div2').style.display = 'none';
	});
	document.getElementById('btn2').addEventListener('click', function(){
		document.getElementById('div3').style.display = 'none';
	});
	document.getElementById('btn3').addEventListener('click', function(){
		document.getElementById('div2').style.display = 'block';
		document.getElementById('div3').style.display = 'block';
	});


	document.getElementById('addInput').addEventListener('click', function(){
	var input =	document.createElement('input');
		input.append;
		var element = document.getElementById("div3");
		element.append(input);
		document.getElementsByTagName('input').attribute = 'text';
		input.setAttribute("class", "test")



		
	});
	document.getElementById('calc').addEventListener('click', function(){
		var inputs = document.getElementsByTagName('input'),
        result = document.getElementById('result'),
        sum = 0;
		for(var i = 0; i < inputs.length; i++){	
			sum += parseInt(inputs[i].value);
		}

        
		document.getElementById('result').innerHTML = sum;	

	});
	document.getElementById('mins').addEventListener('click', function(){
		var inputs = document.getElementsByClassName('test');
		var min = parseInt(inputs[0].value);
		var max = parseInt(inputs[0].value);
		for(var i = 1; i < inputs.length; i++){	
			if(max < parseInt(inputs[i].value)){
				max = parseInt(inputs[i].value);
			}
			if(min > parseInt(inputs[i].value)){
				min = parseInt(inputs[i].value);
			}

		}
		document.getElementById('minn').innerHTML += min;
		document.getElementById('maxx').innerHTML += max;

		
	});


	


})();