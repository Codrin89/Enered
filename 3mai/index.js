
(function () {
	document.getElementById('openInfo').addEventListener('click', function(){
         var info = document.getElementsByClassName('info')[0];
         
         if (info.style.display == "block") {
         	info.style.display = "none";
         } 
         else {
         	info.style.display = "block";

         }


	});
         var d = new Date(); 
         var hour = d.getHours();
         //console.log(d)  //afiseaza data, ora etc din momentul respectiv(la click)
         //console.log(d.getTime());//afiseaza cate milisecunde au trecut de la 1 ianuarie 1970
         if (hour > 0 && hour < 12 ) {
         	document.getElementById('timeofday').innerHTML = "morning";

         }
         else if (11 < hour && hour < 18) {
         	document.getElementById('timeofday').innerHTML = "afternoon";

         }
         else {
         	document.getElementById('timeofday').innerHTML = "evening";

         }
        

/* pt a detecta un browser din js folosim:
 console.log(window.navigator.userAgent); //cea mai rapida
 sau:

 
 function checkBrowser(){
 // Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = //@cc_on!@//false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

 }
*/

/* setTimeout(function(){
},1000);         //asteapta o secunda inainte sa execute */





    //pt a naviga de pe o pagina pe alta
	document.getElementById('nextPage').addEventListener('click', function(){
          var time = setTimeout(function(){
             window.location.href = "ceva.html";
          },1000);
          })
          document.getElementById('timeofday').style.opacity = 1;
          var set = setInterval(function(){

             var timer = document.getElementById('timeofday');
             timer.style.opacity = timer.style.opacity - 0.1;

             if (timer.style.opacity == 0) {
          		clearInterval(set);
          	};

          },1000);

        


 })();


 /* addEventListener functioneaza la: click; dbl_click; keydown; keypress; change; mouseleave;
 mouseenter(=hover);focusin;focusout. */