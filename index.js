(function(){

	$("#hide1").click(function(){
	        $(".container2").hide()

	});   

	$("#hide2").click(function(){
	        $(".container3").hide()

	});      
	$("#showall").click(function(){
        $(".container2, .container3").show();
    });


	$("#add").click(function(){
		var coll = document.createElement("input");
    	coll.setAttribute("type", "text");
    	coll.setAttribute("value", "");
    	coll.setAttribute("class", "form-control");
		document.getElementById('container3').append(coll);

	});
		
	$("#sum").click(function(){
			var total= 0;
			var coll = document.getElementsByClassName('form-control');
			for ( var i = 0; i < coll.length; i++){
	        	total += parseInt(coll[i].value);
        	
    		}
   	
   			document.getElementById('display').innerHTML= 'Sum of inputs: '+ total;
	});

	$("#minmax").click(function(){
		var max = document.getElementsByClassName('form-control')[0].value;
		var min = document.getElementsByClassName('form-control')[0].value;
		var coll = document.getElementsByClassName('form-control');
			for ( var i = 1; i < coll.length; i++){
				var value = parseInt(coll[i].value);
				if(max < value) {
					max = value;
				}
				if(min > value) {
					min = value;
				}
			}	
			document.getElementById('max').innerHTML= 'Max number of inputs: '+ max;
			document.getElementById('min').innerHTML= 'Min number of inputs: '+ min;
	});
		
	


	


})();