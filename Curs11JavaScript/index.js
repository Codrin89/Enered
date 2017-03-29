(function() {
	
	
		$('.carousel').carousel({
				  interval: 0,
				  //wrap: false,
				  //pause:null


	});
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

		$('.btn-primary').on('click', function(e) {
			   $(".carousel-control-prev").click();
	   });

		$('.btn-success').on('click', function(e) {
		   $(".carousel-control-next").click();
		   
	
});



		 var buttonJs = $('<button class="btn btn-danger">Button</button>');				//jeyquerry
		// var buttonJs = document.createElement('button');	//javascript

		$('body').append(buttonJs);
		//$('.btn-danger').css('color', "black"); //se poate border / background-color


		var color = "white";
		setInterval(function() {
			if($('.btn-danger').hasClass('blueBtn')) {
				$('.btn-danger').removeClass('blueBtn');
			}else {
				$('.btn-danger').addClass('blueBtn');
			}
			
		}, 1000);



})();