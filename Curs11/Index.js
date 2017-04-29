(function() {

$('.carousel').carousel({
	interval:0
	});

$(document).keydown(function(e){
	if(e.keyCode === 37){
		$('.carousel-control-prev').click();
	}	return false;

	if (e.keyCode === 39) {
		$('.carousel-control-next').click();
		return false;
	}

});

$('.btn-success').on('click',function(e) {
	window.location.href = "http://www.google.ro";

});
$('.btn-primary').on('click',function(e){
	$('.carousel-control-next').click();
});
var buttonJs = $('<button class="btn btn-danger">Button</button>');

$('.carousel').append(buttonJs);
setInterval(function(){
if ($('.btn-danger').hasClass('blueBtn')){
	$('.btn-danger').removeClass('blueBtn');
}else{
	$('.btn-danger').addClass('blueBtn');
}
},1000);
})();
