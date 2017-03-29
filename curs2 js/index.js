(function() {

	$('.carousel').carousel({
		interval: 0,
		wrap: true,
		pause: 'hover'
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
		$('.carousel-control-prev').click();
	});

	$('.btn-success').on('click', function(e) {
		$('.carousel-control-next').click();
	});


	var buttonJs = $('<button class="btn btn-danger">BOSAN</button>');
	//var buttonjs = document.createElement('button');
	$('body').append(buttonJs);
	$('.btn-danger').css('color', 'black');
	$('.btn-danger').css('background-color', 'grey');
	$('.btn-danger').css('border', '10px solid red');


	$('.btn-danger').hover(function(e) {
		$('.btn-danger').css('color', 'white');
		$('.btn-danger').css('font-size', '40px');
	});

	setInterval(function() {
		if ($('.btn-danger').hasClass('blueBtn')) {
			$('.btn-danger').removeClass('blueBtn');
		}else {
			$('.btn-danger').addClass('blueBtn');
		}
	}, 1000);
})();