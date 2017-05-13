(function(){
   document.getElementById('btn').addEventListener('click', function(){
   	if(this.id == 'btn') {
   		this.classList.remove('btn-danger');
        this.classList.add('btn-primary');
	    var d = new Date();
	    var hour=d.getHours();
	    var min=d.getMinutes();
	    var seconds=d.getSeconds();
	    var milliseconds=d.getMilliseconds();
	    if(document.getElementById('clock') == null) {
	    	var data = $('<p class="time" id="clock">'+'<span id="hour">'+ hour+'</span>:<span id="minutes">'+min+'</span>:<span id="seconds">'+seconds+'</span>:<span id="milliseconds">'+milliseconds+'</span></p>');
	    	$('.container').append(data);
	    }
	    

	    window.interval = setInterval(function(){ 
			var d = new Date();
			var hour=d.getHours();
			var min=d.getMinutes();
			var seconds=d.getSeconds();
			var milliseconds=d.getMilliseconds();
			document.getElementById('hour').innerHTML=hour;
			document.getElementById('minutes').innerHTML=min;
			document.getElementById('seconds').innerHTML=seconds;
			document.getElementById('milliseconds').innerHTML=milliseconds;
			if(seconds % 2 === 0){
				document.getElementById('seconds').style.color = "red";
			} else {
				document.getElementById('seconds').style.color = "blue";
			};
			if(min % 2 === 0){
				document.getElementById('minutes').style.color = "red";
			} else {
				document.getElementById('minutes').style.color = "blue";
			};
			if(hour % 2 === 0){
				document.getElementById('hour').style.color = "red";
			} else {
				document.getElementById('hour').style.color = "blue";
			};
			if(milliseconds % 2 === 0){
				document.getElementById('milliseconds').style.color = "red";
			} else {
				document.getElementById('milliseconds').style.color = "blue";
			};          
          },1);
	    this.id = 'stop';
   	} else {
   		this.id = 'btn';
   		this.classList.add('btn-danger');
        this.classList.remove('btn-primary');
   		clearInterval(window.interval);

   	}
        






});


   var d = new Date();
   var day=d.getDate();
   var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
   ];
    var year=d.getFullYear();
    var date = $('<p class="date">'+'Today is '+day+' of '+monthNames[d.getMonth()]+' '+year+'!'+'</p>');
    $('.container').append(date);

    if(d.getMonth()>=0 && d.getMonth()<=1){
        var bla = $('<p class="bla" id="tep">'+'Welcome winter'+'!'+'</p>');
    } 
    if(d.getMonth()>1 && d.getMonth()<=4) {
        var bla = $('<p class="bla" id="tep">'+'Welcome spring'+'!'+'</p>');
    }
    if(d.getMonth()>4 && d.getMonth()<=7) {
        var bla = $('<p class="bla" id="tep">'+'Welcome summer'+'!'+'</p>');
    }
    if(d.getMonth()>7 && d.getMonth()<=10) {
        var bla = $('<p class="bla" id="tep">'+'Welcome autumn'+'!'+'</p>');
    }
    if(d.getMonth()>10) {
    	var bla = $('<p class="bla" id="tep">'+'Welcome winter'+'!'+'</p>');
    };
    $('.container').append(bla);
    document.getElementById('tep').style.color = "red";
   

})();