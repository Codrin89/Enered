(function(){
	document.getElementById('first').addEventListener('click', function(){
		document.getElementById('container2').style.display = 'none';
	})
	document.getElementById('second').addEventListener('click', function(){
		document.getElementById('container3').style.display = 'none';
	})
	document.getElementById('third').addEventListener('click', function(){
		document.getElementById('container2').style.display = 'block';
		document.getElementById('container3').style.display = 'block';
	})



	
	document.getElementById('btn1').addEventListener('click', function(){
		var input = document.createElement("input");
		input.type = "text";
		input.className = "input-fix";
		container3.appendChild(input);
	})
		
	document.getElementById('btn2').addEventListener('click', function(){
		var input = document.getElementsByTagName("input");
		var sum = 0;
		
		for(i=0;i< input.length;i++){
			sum += parseInt(input[i].value)
			document.getElementById('show').innerHTML = sum;
			console.log(sum);

		}
	})

	document.getElementById('btn3').addEventListener('click', function(){
		var input = document.getElementsByTagName("input");
		
		for(i=0;i<= input.length;i++){
			var x = Math.max(input[i].value);
			document.getElementById('showmax').innerHTML = x;
			
		

		}


	});




})();