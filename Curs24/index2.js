(function(){
	window.myObject = [{
		"nume": "Alexandra",
		"varsata": "28",
		"inaltime": "1,75",
		"greutate": "53kg"
	},
	{
		"nume": "Andreea",
		"varsata": "25",
		"inaltime": "1,67",
		"greutate": "94kg"
	},
	{
		"nume": "Bogdan",
		"varsata": "16",
		"inaltime": "1,54",
		"greutate": "53kg"
	},
	{
		"nume": "Diana",
		"varsata": "29",
		"inaltime": "1,78",
		"greutate": "39kg"
	}];

	function makeList(){
		for(var i=0;i<window.myObject.length;i++){
			var button = $('<button data-ref="'+i+'" class="btn btn-primary">'+window.myObject[i].nume+'</button>');
			$('#buttons').append(button);
		}
	}
	makeList();

	$('.btn-primary').on('click',function(){
		makeData(this.getAttribute('data-ref'));

	})
	function makeData(pointer){
		console.log(window.myObject[pointer]);
		var name = $('<h1>'+window.myObject[pointer].nume+'</h1>');
		var varsta = $('<h1>'+window.myObject[pointer].varsta+'</h1>');
		var inaltime = $('<h1>'+window.myObject[pointer].inaltime+'</h1>');
		var greutate = $('<h1>'+window.myObject[pointer].greutate+'</h1>');
		$('#data').html('');
		$('#data').append(name);
		$('#data').append(varsta);
		$('#data').append(inaltime);
		$('#data').append(greutate);
	}


})();