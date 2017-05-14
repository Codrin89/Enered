(function(){
	var radioBoxes=document.getElementsByClassName('inputs');
	for (i=0;i<radioBoxes.length;i++){
		radioBoxes[i].addEventListener('click',function(){
			// if(this.checked){
			// 	console.log(this);
			// }
			var counter=this.getAttribute('data-radio');
			document.getElementsByTagName('h1')[0].innerHTML='you have clicked input'+counter;
			var imgS =document.getElementsByClassName('popup')[0].getElementsByTagName('img');
			console.log(imgS);
			for(var i=0;i<imgS.length;i++){
				imgS[i].style.display="none";
			};
			imgS[counter-1].style.display="block";
			document.getElementsByClassName("popup")[0].style.display='block';

		});
	}
	setInterval(function(){
		for(i=0;i<radioBoxes.length;i++){
			if(radioBoxes[i].checked){
				if(i == radioBoxes.length-1){
					radioBoxes[0].click();
					i++;
				}else{
					radioBoxes[i+1].click();
					i++;
				}
			}
		}
	},1000)
})();