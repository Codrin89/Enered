(function(){
	document.getElementById('openInfo').addEventListener('click',function(){
		var info = document.getElementsByClassName('info')[0];
		// document.getElementsByClassName('info')[0].style.display= "block";
		// info.style.display='block';
		// console.log(info.style.display);
		if(info.style.display == 'block'){
			info.style.display='none';
		} else{
			info.style.display='block';
		}
		// console.log(document.getElementsByClassName('info'));
	});

	var d = new Date();
	var hours = d.getHours();
	// console.log(d.getTime());
	// console.log(d.getHours());
	if(hours>11 && hours<18){
		document.getElementById('timeOfDay').innerHTML="Afternoon";

	}
	if((hours>17 && hours<24) ||(hours>=0 && hours<4)) {
		document.getElementById('timeOfDay').innerHTML="Evening";
	}
	if(hours>3 && hours<12){
		document.getElementById('timeOfDay').innerHTML="Morning";
	}








	function checkBrowser(){
				// Opera 8.0+
		var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		console.log(isOpera);
		// Firefox 1.0+
		var isFirefox = typeof InstallTrigger !== 'undefined';
		console.log(isFirefox);

		// Safari 3.0+ "[object HTMLElementConstructor]" 
		var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

		// Internet Explorer 6-11
		var isIE = /*@cc_on!@*/false || !!document.documentMode;

		// Edge 20+
		var isEdge = !isIE && !!window.StyleMedia;

		// Chrome 1+
		var isChrome = !!window.chrome && !!window.chrome.webstore;

		// Blink engine detection
		var isBlink = (isChrome || isOpera) && !!window.CSS;
		console.log(isBlink);
			}
		checkBrowser();




		document.getElementById('next-page').addEventListener('click',
			function(){
				var timer = setTimeout(function(){
					window.location.href = "index2.html"
				},1000);
				
		})

		document.getElementById('timeOfDay').style.opacity = 1;
		var set = setInterval(function(){
					var timer =document.getElementById('timeOfDay');
					timer.style.opacity = timer.style.opacity - 0.2;
					if(timer.style.opacity == 0){
						clearInterval(set);
					};
				
			},1000);

})();