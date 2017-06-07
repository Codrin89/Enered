(function(){


	document.getElementById('unu').addEventListener('click', function(){
		document.getElementById('content').style.display = 'none';
	});


   document.getElementById('doi').addEventListener('click', function(){
		document.getElementById('footer').style.display = 'none';
	});

   document.getElementById('trei').addEventListener('click', function(){
   		document.getElementById('content').style.display = 'block';
   		document.getElementById('footer').style.display = 'block';
   });

document.getElementById('add').addEventListener('click', function(){
      var input = document.createElement("input");
      input.type = "text";
      input.classList.add("adaugare"); 
      footer.appendChild(input); 

});

document.getElementById('sum').addEventListener('click', function(){
      var calcul = document.getElementsByClassName('adaugare');
      var total = 0;
      for(var i = 0; i < calcul.length; i++) {
         total += parseInt(calcul[i].value);
      }
      document.getElementById('afisare').innerHTML = "total is:" + total;

});

document.getElementById('min-max').addEventListener('click', function(){
   var comparare = document.getElementsByClassName('adaugare');
   var max = parseInt(comparare[0].value);
   var min = parseInt(comparare[0].value);

   for(var i = 1; i < comparare.length; i++) {
      if(max < parseInt(comparare[i].value)) {
         max = parseInt(comparare[i].value);
      }
      if(min > parseInt(comparare[i].value)) {
         min = parseInt(comparare[i].value);
      }

    }
    document.getElementById('rezultat').innerHTML = "rezultat:" + min + ' ' + max;
});

})(); 