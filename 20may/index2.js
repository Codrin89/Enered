(function(){
   window.myObject = [
      {
      	 "nume":"Alexandra",
      	 "varsta":"28",
      	 "inaltime":"1.75",
      	 "grautate":"53kg"
      },
      {
      	"nume":"Andreea",
      	"varsta":"24",
      	"inaltime":"1,55cm",
      	"greutate":"54kg"
      },
      {
      	"nume":"Bogdan",
      	"varsta":"17",
      	"inaltime":"1,90cm",
      	"greutate":"61kg"
      },
      {
      	"nume":"Madalina",
      	"varsta":"23",
      	"inaltime":"1,55cm",
      	"greutate":"61kg"
      },
      {
      	"nume":"Diana",
      	"varsta":"21",
      	"inaltime":"1,65cm",
      	"greutate":"61kg"
      },
      {
      	"nume":"Codrin",
      	"varsta":"23",
      	"inaltime":"1,78cm",
      	"greutate":"63kg"
      },
      {
      	"nume":"Catrinel",
      	"varsta":"22",
      	"inaltime":"1,58cm",
      	"greutate":"63kg"
      }
   ];
   function makeList() {
      for(var i=0; i < window.myObject.length; i++){
           var button = $('<button data-ref="'+i+'" class="btn btn-primary">'+window.myObject[i].nume+'</button>');
           $('#buttons').append(button);
      } 
   }
   makeList();
   $('.btn-primary').on('click', function(){
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