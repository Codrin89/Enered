(function() {

	var buttonClick = document.getElementById('submit').addEventListener('click', function() {
		if(this.id == 'submit') {
			alert('felicitari!!');
			this.classList.add('btn-danger');
			this.classList.remove('btn-primary');



			var d = new Date();
			var hour= d.getHours();
			var minutes = d.getMinutes();
			var seconds = d.getSeconds();
			var day = d.getDate();
			var month = d.getMonth() + 1;
			var year = d.getFullYear();	
			var milisec = d.getMilliseconds();	

			var n ="AM"; 
  			if ((hour >= 12) && (hour <=23 )) {
   				 n ="PM";
 		 	} else {
 		 		n="AM";
 		 	}

			if(document.getElementById('clock') == null) {
				var time = $('<p id="clock" class="time"><span id="hour">' +  hour + '</span>:<span id="minutes">' + minutes + '</span>:<span id="seconds">' +  seconds + '</span>:<span id="milisec">' +  milisec + '</span>' +n + '</p>');
				$('body').append(time);
			}
			if(document.getElementById('date') == null) {
				var date = $('<p id="date" class="date">' + day + '-' + 0 + month + '-' + year + '</p>');
				$('body').append(date);
			}


			window.interval = setInterval(function() {

				var d = new Date();
				var hour= d.getHours();
				var minutes = d.getMinutes();
				var seconds = d.getSeconds();
				var milisec = d.getMilliseconds();
				document.getElementById('hour').innerHTML = hour;
				document.getElementById('minutes').innerHTML = minutes;
				document.getElementById('seconds').innerHTML = seconds;
				document.getElementById('milisec').innerHTML = milisec;
			},1);

			this.id = 'stop-clock';
		} else {
			this.id = 'submit';
			clearInterval(window.interval);
		}
			
		
	});


})(); 