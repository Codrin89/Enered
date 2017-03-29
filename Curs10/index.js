(function() {

	$('.carousel').carousel({
 	 interval: 0,
 	 keyboard: true,
 	 pause : 'hover'
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

	$('next').on('click', function(e) {
		$('carousel-control-prev').click();
	});

	$('prev').on('click', function(e) {
		$('carousel-control-next').click();
	});

})();