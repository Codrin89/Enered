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
        input.setAttribute('class','numbers');
        input.setAttribute('type','text');
        document.getElementsByClassName('section3')[0].append(input);
        

   })

    var array= [];
    document.getElementsByClassName('numbers')[0].addEventListener('keydown', function(e){ 
    	if(e.keyCode===13){
    		x=this.value;
            array.push(x);
    	}
     
    });
    console.log(array);
	
})();