(function(){
    document.getElementById('openInfo').addEventListener('click', function(){
    	var info = document.getElementsByClassName('info')[0];
    	//info.style.display="block";
    	//console.log(info.style.display);
    	if(info.style.display == "block"){
           info.style.display = "none";
    	}else{
           info.style.display = "block";
    	}
        //var d = new Date();
        //console.log(d.getTime());
    //document.getElementsByClassName('info')[0].style.display="block";
                                            //css    css property css prop values
    //console.log(document.getElementsByClassName('info'));
    });
var d = new Date();
var hour = d.getHours();
if(hour>11 && hour<18){
	document.getElementById('timeofday').innerHTML= "Afternoon";
} 
if((hour>17 && hour<24)||(hour >= 0 && hour<4)){
	document.getElementById('timeofday').innerHTML= "Evening";//!!!
}
if(hour>3 && hour<12){
	document.getElementById('timeofday').innerHTML= "Morning";
}
//console.log(d.getHours());



//google: check browser (how to detect what type of browser is...????)
function checkBrowser(){
	// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
console.log(isOpera);
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
console.log(isFirefox);
// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
console.log(isSafari);//false
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
console.log(isIE);
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
console.log(isEdge);//false
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
console.log(isChrome); //true
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
}
checkBrowser(); //pentru a executa functia checkBrowser!!!!!!!!!!!!!!!
 
 document.getElementById('next_page').addEventListener('click', 
 	function(){
      var time = setTimeout(function() {
       window.location.href = "index2.html";
      },1000);
  });

 document.getElementById('timeofday').style.opacity = 1;
      var set = setInterval(function(){
      	
      	var timer = document.getElementById('timeofday');
      	timer.style.opacity = timer.style.opacity - 0.2;
      	if(timer.style.opacity == 0){
            clearInterval(set)
      	};
      },1000);
  //test!!!!add EventListener click!!!!, dbl_click, keydown, keypress!!!, change, mouseleave, mouseenter.....etc 
  //style.property canvas paint(de incercat)
})();