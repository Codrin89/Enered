(function() {



	console.log($('#clickBtn'));
	$('#clickBtn').click(function() {
		// alert("Butonul a fost apasat!!!")
		$('.animate') .css('display', 'block');
		$('.animate') .addClass('animate-position');


	});

	$(document).click(function(event) {
		$('.circle').css('top', event.pageY);
		$('.circle').css('left', event.pageX);
	});














})();