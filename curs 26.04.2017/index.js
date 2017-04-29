(function() {


	console.log($('#clickBtn'));
	$('#clickBtn').click(function() {
		$('.animate').css('display', 'block');
		$('.animate').addClass('animate-color');
		$('.animate').addClass('animate-position');
		$('.reanimate').css('display', 'block');
		$('.reanimate').addClass('reanimate-color');
		$('.reanimate').addClass('reanimate-position');


	});

	/*$(document).click(function(event) {
		$('.circle').css('top', event.pageY);
		$('.circle').css('left', event.pageX);
	});









*/ 

})();
