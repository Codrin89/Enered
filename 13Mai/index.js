(function (){
	 document.getElementById('button').addEventListener('click' ,function(){
		if(this.id == 'button') {
			this.classList.add('btn-warning')
			this.classList.remove('btn-danger')
			var d = new Date ();
				var day = d.getDate();
				var month = d.getMonth ()+1;
				var year = d.getFullYear();
				if (document.getElementById('date') == null) {
					var date = $('<p id="date" class = "date" >' + day +'/'+month+'/'+year +'</p>');
				}
			
			
			$('body').append(date);

			window.myVar = setInterval(function(){
				var d = new Date ();
				var hour = d.getHours();
				var min = d.getMinutes();
				var seconds = d.getSeconds();
				document.getElementById('hour').innerHTML = hour;
		   		document.getElementById('minutes').innerHTML = min;
		    	document.getElementById('seconds').innerHTML = seconds;

			 }, 1000);
			this.id = 'stop';
		} else {
			this.id = 'button';
			clearInterval(window.myVar);
		}

		
	    	
	});
		
	
})();