(function(){
	var buttonClick = document.getElementById('btn').addEventListener('click', function(){
		if(this.id == 'btn') {
		alert('aaaaaa');
		this.classList.remove('btn-danger');
		this.classList.add('btn-primary');

		var d = new Date();
		var hour = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var millisec = d.getMilliseconds();
		var day = d.getDate();
		var month = d.getMonth()+1;
		var year = d.getFullYear();
		if(document.getElementById('clock') == null) {
			 var time = $('<p id="clock" class="time"><span id="hour">' +  hour + '</span>:<span id="minutes">' + min + '</span>:<span id="seconds">' +  sec + '</span>:<span id="milliseconds">' +  millisec +'</span></p>');
			 $('body').append(time);
		}
		if(document.getElementById('date') == null) {
			var date = $('<p class="date">'  + year + '-' + month  + '-' + day +'</p>');
		  $('body').append(date);
		}
		//var time = $('<p class="time">' + hour + ':' + min + ':' + sec + '</p>');
		//$('body').append(time);

		//var date = $('<p class="date">'  + year + '-' + month  + '-' + day +'</p>');
		//$('body').append(date);


		
       // var time = $('<p id="clock" class="time"><span id="hour">' +  hour + '</span>:<span id="minutes">' + min + '</span>:<span id="seconds">' +  sec + '</span>:<span id="milliseconds">' +  millisec +'</span></p>');
		//$('body').append(time);


		window.interval = setInterval(function() {

			var d = new Date();
		    var hour = d.getHours();
		    var min = d.getMinutes();
		    var sec = d.getSeconds();
		    var millisec = d.getMilliseconds();
			document.getElementById('hour').innerHTML = hour;
			document.getElementById('minutes').innerHTML = min;
			document.getElementById('seconds').innerHTML = sec;
			document.getElementById('milliseconds').innerHTML = millisec;
		}, 1);

		this.id = 'stop-clock';
			} else {
				this.id = 'btn';
				clearInterval(window.interval);
			}


	});
})(); 