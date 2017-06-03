(function(){

	//SLIDER

	$('.carousel').carousel({
		interval:0
		 
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 37 ) {
			//Previous
			$(".carousel-control-prev").click();
			return false;
		}
		if (e.keyCode === 39) {
			//Next
			$(".carousel-control-next").click();
			return false;
		}
	});

	$('.btn-primary').on('click',function(e) {
		$('.carousel-control-prev').click();
	});
	$('.btn-succes').on('click',function(e) {
		$('.carousel-control-next').click();
	});	




    $('#hide2').on('click', function(event) {        
         $('#div2').hide();
    });

    $('#hide3').on('click', function(event) {        
         $('#div3').hide();
    });

    $('#show').on('click', function(event) {        
         $('#div2').show();
         $('#div3').show();
    });
	
    	
 	$('#create').on('click', function(event) {        
        var newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('class', 'form-control');
        document.getElementById('div3').append(newInput);
    });

    $('#calculate').on('click', function(event) {   
    	var inputs = document.getElementsByClassName('form-control');
    	var sumTotal = 0 ;
    	for (var i = 0; i < inputs.length; i++) {
    		sumTotal+= parseInt(inputs[i].value);
    	}
    	document.getElementsById('resultsSum').innerHTML = sumTotal;

	});

     $('#minmax').on('click', function(event) {
		var inputs = document.getElementsByClassName('form-control');
		var min = inputs[0].value;
		var min = inputs[0].value;
		for (var i = 1; i < inputs.length; i++) {
			if(max < inputs[i].value) {
				max = inputs[i].value;
			}
			if(min < inputs[i].value) {
				min = inputs[i].value;
			}
		};


})();