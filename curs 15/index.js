(function(){  //jquery

console.log($('#clickBtn')); //#btn pu id
$('#clickBtn').click(function() {
	$('.animate').css('display', 'block'); 
   alert("Butonul a fost apasat!");
   $('.animate').addClass('animate-color');
   $('.animate').addClass('animate-position');
});

$(document).click(function(event) {
$(' .circle').css('top', event.pageY);
$(' .circle').css('left', event.pageX);
});












})();