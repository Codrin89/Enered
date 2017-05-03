(function() {
	document.getElementById('openInfo').addEventListener('click', function() {
		var info = document.getElementsByClassName('info')[0];


			//info.style.display = "block";
			//console.log(info.style.display);

			if(info.style.display == 'block') {
				info.style.display = 'none';

			} else {
				info.style.display = 'block';
			}


	});

		var d = new Date();
		var hour= d.getHours();
		
		if (hour > 11 &&  hour < 18) {
			document.getElementById('timeofday').innerHTML = 'Afternoon';

		} 

		if ((hour > 18 && hour < 24) || (hour >= 0 && hour < 4)) {
			document.getElementById('timeofday').innerHTML = 'Evening';
		}

		if (hour > 3 && hour < 12) {
			document.getElementById('timeofday').innerHTML = 'Morning';
		}
	
function checkBrowser() {
	// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
console.log(isFirefox);

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
console.log(isIE);

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
console.log(isChrome);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
}
checkBrowser();

document.getElementById('next_page').addEventListener('click', function() {
	function () {
		var time =  setTimeout(function() {
			window.location.href = "Index.html";
		}, 1000);
})
		document.getElementById('timeofday').style.opacity = 1;
		var set = setInterval(function() {
			
			var timer = document.getElementById('timeofday');
				timer.style.opacity = timer.style.opacity - 0.2;

			

		if(timer.style.opacity == 0) {
			clearInterval(set);
		}
	},1000);


})();
 
