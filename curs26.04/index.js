(function() {



	console.log($('clickBtn'));
    $('#clickBtn').click(function() {
    	// alert("SOS");
    		$('.animate').css('display','block');
    		$('.animate').addClass('animate-color');
    		$('.animate').addClass('animate-position');

});


    $(document).click(function(event) {
    		$('.animatee').css('top', event.pageY);
    		$('.animatee').css('left', event.pageX);
    		
    

 });













})();