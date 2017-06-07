(function(){

document.getElementById('btn').addEventListener('click' ,function(){
	if(this.id == "btn"){
	this.classList.remove('btn-danger');
	this.classList.add('btn-warning');
	var d = new Date();
			if(document.getElementById('date') == null) {
					var date = $('<p id="date" class="date">' +  d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear()+'</p>');
			}
	

			$('body').append(date);
		window.myVar = setInterval(function() {
			var d = new Date();
			document.getElementById('hour').innerHTML = d.getHours();
			document.getElementById('min').innerHTML = d.getMinutes();
			document.getElementById('seconds').innerHTML = d.getSeconds();
		},1000);
			this.id = "stop";
	}else {
		this.id = "btn";
		clearInterval(window.myVar)
	}
	

	





});
})();