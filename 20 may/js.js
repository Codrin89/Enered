(function(){
  window.myObject = [
	  {
	  	"nume": "Alexandra",
	  	"varsta": "28",
	  	"inaltime": "1,75",
	  	"greutate": "53kg"
	  },
	   {
	   	"nume": "Andreea",
	  	"varsta": "24",
	  	"inaltime": "1,55",
	  	"greutate": "54kg"
	  },
	  {
	   	"nume": "Bogdan",
	  	"varsta": "17",
	  	"inaltime": "1,95",
	  	"greutate": "61kg"
	  },
	  {
	   	"nume": "Madalina",
	  	"varsta": "23",
	  	"inaltime": "1,95",
	  	"greutate": "50kg"
	  },
	  {
	   	"nume": "Diana",
	  	"varsta": "21",
	  	"inaltime": "1,72",
	  	"greutate": "56kg"
	  },
	  {
	   	"nume": "Codrin",
	  	"varsta": "24",
	  	"inaltime": "1,75",
	  	"greutate": "63kg"
	  }
  ];

  function makeList(){
  	for(var i=0; i<window.myObject.length; i++){//var i=0 pozitia->start; i< conditia ----.length ->stop; i++ step;
        var button = $('<button data-ref="'+i+'" class="btn btn-primary">'+window.myObject[i].nume+'</button>');//$-sintaxa de jquery pentru a crea element +-concatenarea;
  		$('#buttons').append(button); //'+i+' le concateneaza cu button data-ref si class="btn...."; 
  	}
  }
  makeList();  //sa le execute(apel de f-tii);
  	$('.btn-primary').on('click',function(){ //on- pentru jquery, in js asta e addEventListener;
  		
  		makeData(this.getAttribute('data-ref'))
  	})
function makeData(pointer){ //pointer-pe ce pozitie esti
	console.log(window.myObject[pointer])
	var name = $('<h1>'+window.myObject[pointer].nume+'</h1>');
	var varsta = $('<h1>'+window.myObject[pointer].varsta+'</h1>');
	var inaltime = $('<h1>'+window.myObject[pointer].inaltime+'</h1>');
	var greutate = $('<h1>'+window.myObject[pointer].greutate+'</h1>');
	
	$('#data').html('');
	$('#data').append(name); //#data este divul creat
    $('#data').append(varsta); 
    $('#data').append(inaltime);
    $('#data').append(greutate);
}


})();