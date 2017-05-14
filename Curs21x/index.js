(function(){
	document.getElementById('btn').addEventListener('click',function(){
		// alert('you pressed the btn!');
		if(this.id == 'btn') {
			this.classList.remove('btn-danger');
			this.classList.add('btn-success');
			var d = new Date();
			var hour=d.getHours();
			var min=d.getMinutes();
			var sec=d.getSeconds();
			if(document.getElementById('clock') == null) {
				var time=$('<p id="clock" class="time"><span id="hour">' + hour + '</span>:<span id="min">' + min + '</span>:<span id="sec">' + sec + '</span></p>');
				$('body').append(time);
			}
			
			window.interval = setInterval(function(){
				var d = new Date();
				var hour=d.getHours();
				var min=d.getMinutes();
				var sec=d.getSeconds();
				document.getElementById('hour').innerHTML=hour
				document.getElementById('min').innerHTML=min
				document.getElementById('sec').innerHTML=sec
			},1000);
			this.id = 'stop';
		} else {
			this.id = 'btn';
			clearInterval(window.interval);
		}
		

	}); 
})();