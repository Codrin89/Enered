(function(){
	document.getElementById('hidesecond').addEventListener('click', function(){
         var info = document.getElementsByClassName('section2')[0];
         
         if (info.style.display == "block") {
         	info.style.display = "none";
         } 
         else {
         	info.style.display = "block";

         }
   
   })
	document.getElementById('hidethird').addEventListener('click', function(){
         var info = document.getElementsByClassName('section3')[0];
         
         if (info.style.display == "block") {
         	info.style.display = "none";
         } 
         else {
         	info.style.display = "block";

         }
   
   })
	document.getElementById('showall').addEventListener('click', function(){
         var info = document.getElementsByClassName('section2')[0];
         var infoo = document.getElementsByClassName('section3')[0];
         
         if (info.style.display == "none") {
         	info.style.display = "block";
         } 
          if (infoo.style.display == "none") {}{
         	infoo.style.display = "block";

         }
   
   })
	
	document.getElementById('addinput').addEventListener('click', function(){ 
        var input = document.createElement('input');
        input.setAttribute('class','form-control');
        input.setAttribute('type','text');
        document.getElementsByClassName('section3')[0].append(input);
        

   })

    document.getElementById('suminput').addEventListener('click', function(){ 
        var inputs = document.getElementsByClassName('form-control');
        var sumTotal = 0;
        for(var i=0;i<inputs.length;i++){
        	sumTotal += parseInt(inputs[i].value);
        }
        document.getElementsByClassName('section2')[0].innerHTML = sumTotal;
        

   });
	document.getElementById('maxandmin').addEventListener('click', function(){ 
        var inputs = document.getElementsByClassName('form-control');
        //cand targhetam pe clase mereu se vor stoca valorile in arrays; doar cand targhetam pe id returneaza o singura valoare;
        var min = inputs[0].value;
        var max = inputs[0].value;
        for(var i=1;i<inputs.length;i++){
           if(max<inputs[i].value){
           	   max = inputs[i].value;
              }
           if(min>inputs[i].value){
           	   min = inputs[i].value;
              }
           }
     document.getElementsByClassName('section2')[0].innerHTML = "min = " + min + "<br>" + "max= " +max;   

   });
})();