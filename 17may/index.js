(function(){
   document.getElementsByClassName('account')[0].getElementsByClassName('btn-gol')[0].addEventListener('click',function(){
      console.log(this.parentElement);
   	  var stil = this.parentElement.getElementsByClassName('dropdown-content')[0];
   	  if (stil.style.display == 'block') {
   	  	stil.style.display = 'none';
   	  } else {
   	  	stil.style.display = 'block';
   	  }
   })
   var tabs = document.getElementsByClassName('tabs-step');
   for(var i = 0; i < tabs.length; i++) {
   	tabs[i].addEventListener('click', function(){
   		document.getElementsByClassName('active')[0].classList.remove('active');
   		this.classList.add('active');
   		//see what button we clicked
   		var buttons = document.getElementsByClassName('tabs-step');
   		for(var i = 0; i < buttons.length; i++){
   			if (buttons[i] == this) {
   				var clickedButton = i;
   			}
   		}
   		document.getElementsByClassName('active-items')[0].classList.remove('active-items');
   		document.getElementsByClassName('email-items')[clickedButton].classList.add('active-items');
   	});
   }

  
})();