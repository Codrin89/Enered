(function(){  //JQUERY
	console.log($('#clickbtn'));
	$('#clickBtn').click(function(){
		// alert("Alerta!! Butonul a fost apasat!");
		$('.animate').css('display','block');    //cliskpe btn si apare 
		$('.animate').addClass('animate-color');
		$('.animate').addClass('animate-position');


	});
	$(document).click(function(event){
		$('.circle').css('top',event.pageY);
		$('.circle').css('left',event.pageX);

	})




})();