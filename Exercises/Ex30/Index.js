(function(){

	function generateTable(enfOfLine){
		document.getElementById('table').innerHTML = '';

		var row = document.createElement('div');
		row.setAttribute('class','row');
		var box = document.createElement('div');
		box.setAttribute('class' , 'box');
		row.append(box);
		for(var i = 0; i < enfOfLine; i++){
			var box = document.createElement('div');
			box.setAttribute('class' , 'box');
			var number = document.createTextNode(i);
			box.append(number);
			row.append(box);
		}
		document.getElementById('table').append(row);

		for(var i = 0; i < enfOfLine; i++){
			var row = document.createElement('div');
			row.setAttribute('class','row');
			var box = document.createElement('div');
			box.setAttribute('class' , 'box');
			var number = document.createTextNode(i);
			box.append(number);
			row.append(box);
			for(j = 0; j < enfOfLine; j++){
				var box = document.createElement('div')
				box.setAttribute('class' , 'box');
				var number = document.createTextNode(i*j);
				box.append(number);
				row.append(box);
			}
			document.getElementById('table').append(row);
		}
	
	}
		generateTable(13);

		document.getElementById('select').addEventListener('change' ,function(){
			generateTable(this.value);
		})
})();