(function(){
  var buttonClick = document.getElementById('button').addEventListener('click', function(){
    if(this.id != 'stopclock') {
      window.interval = setInterval(function(){
        var d = new Date();
        var hour = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        var millsec = d.getMilliseconds();
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        document.getElementById('Milliseconds').innerHTML = millsec;
      },1);
      this.id = 'stopclock';
    } else {
      this.id = 'button';
      clearInterval(window.interval);
    }
    
 
  });
 
  






})();