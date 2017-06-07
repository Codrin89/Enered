(function(){

var radioBoxes = document.getElementsByClassName('inputs');
for(i=0;i<radioBoxes.length;i++){
	radioBoxes[i].addEventListener('click' ,function(){
		var counter = this.getAttribute('data-radio')
		document.getElementsByTagName('h1')[0].innerHTML = 'do you have clicked input' + counter;
		var img = document.getElementsByClassName('popup')[0].getElementsByTagName('img');
		console.log(img);
		for(var i=0;i<img.length;i++){
			img[i].style.display = "none"
		}
		img [counter-1].style.display = "block";
		document.getElementsByClassName('popup')[0].style.display = 'block'
	});
}
	setInterval(function(){
		for(i=0;i<radioBoxes.length;i++){
			if (radioBoxes[i].checked) {
			if (i == radioBoxes.length -1) {
				radioBoxes[0].click();
				i++;

			}else{
				radioBoxes[i+1].click();
				i++;
			}
		}
	}
	})


})();