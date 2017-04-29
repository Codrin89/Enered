(function() {

	console.log($('#clickBtn'));
	$('#clickBtn').click(function() {
		$('.animate').css('display', 'block');
		$('.animate').addClass('animate-color');
		$('.animate').addClass('animate-position');

	});

	$(document).click(function(event) {
		$('.circle').css('top', event.pageY-50);
		$('.circle').css('left', event.pageX-50);


	});









})();