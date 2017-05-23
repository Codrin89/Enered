(function() {
	$('.slide').carousel({
  		interval: 0,
  		pause:null
  });
	$(document).keydown(function(e) {
        if (e.keyCode === 37) {
        	//Previous
        	$(".carousel-control-prev-icon").click();
        	return false;
        }
        if (e.keyCode === 39) {
        	//Next
        	$(".carousel-control-next-icon").click();
        	return false;
        }
	});
    

})();