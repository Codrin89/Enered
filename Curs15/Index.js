(function(){

	document.getElementById('openInfo').addEventListener('click' , function(){
		var info = document.getElementsByClassName('info')[0];

		if (info.style.display == 'block'){
			info.style.display = 'none';
		}else {
			info.style.display = 'block';
		}
		


			});

		var d = new Date();
		var hour = d.getHours();
		if (hour > 11 && hour < 18) {
			document.getElementById('timeofday').innerHTML = 'Afternoon';
		}
		if ((hour > 17 && hour < 24) || (hour >=0 && hour < 4)){
			document.getElementById('timeofday').innerHTML = 'Evening';
		}		
		if (hour > 3 && hour < 12) {
			document.getElementById('timeofday').innerHTML = 'Morning';
		}	
		function checkBrowser(){
			// Opera 8.0+
			var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
			console.log('opera: ' + isOpera);
			// Firefox 1.0+
			var isFirefox = typeof InstallTrigger !== 'undefined';
			console.log('Firefox:' + isFirefox)
			// Safari 3.0+ "[object HTMLElementConstructor]" 
			var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

			// Internet Explorer 6-11
			var isIE = /*@cc_on!@*/false || !!document.documentMode;
			console.log('Internet:' + isIE\)
			// Edge 20+
			var isEdge = !isIE && !!window.StyleMedia;

			// Chrome 1+
			var isChrome = !!window.chrome && !!window.chrome.webstore;
			console.log('chrome:' + isChrome)
			// Blink engine detection
			var isBlink = (isChrome || isOpera) && !!window.CSS;
		}
		checkBrowser();
})();	