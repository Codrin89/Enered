(function(){

		$('.carousel').carousel({
  			interval: 5000,
 		    pause:"hover",
            wrap:true,
            interva:0
});
	// $('carouselExampleSlidesOnly').carousel();
	$(document).keydown(function(e) {
	if (e.keyCode === 37) {
	   // Previous
	   $(".carousel-control-prev").click();
	   return false;
	}
	if (e.keyCode === 39) {
	   // Next
	   $(".carousel-control-next").click();
	   return false;
	}
});
	$('.btn-primary').on('click',function(e){
			$('.carousel-control-prev').click();
	});
	$('.btn-info').on('click',function(e){
			$('.carousel-control-next').click();
	});

	var buttonJs = $('<button class="btn btn-danger">Button</button>');     //jquery
	// var buttonJs = document.craeteElement('button');  //JS
	$('.carousel').append(buttonJs);
	$('.btn-danger').css('color','black');
	$('.btn-danger').css('border','3px solid blue');

	
	// setTimeout(function(){   //schimba culoare btn click
	// 	$('.btn-danger').css('color','white');
	// },3000);


	/*var color = "white";    //se schumba culoarea la btn la 1 sec
	setInterval(function(){
	$('.btn-danger').css('color',color);
	color = "blue";
	},1000);
	*/
	setInterval(function() {
		if($('.btn-danger').hasClass('blueBtn')){
			$('.btn-danger').removeClass('blueBtn');
	}else{
		$('.btn-danger').addClass('blueBtn');
	}
	},1000);


})();