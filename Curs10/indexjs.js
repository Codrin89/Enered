(function(){

		var number1= 3;
		var number2= 5;
		var string1= 'something';
		var string2= 'something2';
/*
		 document.getElementById('button').addEventListener('click',function(){
		 	// alert('something');
		 	clickValidator(this);
		 });

		 function clickValidator(button){
		 	// console.log(nume);   
		 	var inputValue= document.getElementById('input-data');
		 	console.log(inputValue.value);
		 }

		 document.getElementsByTagName('body')[0].addEventListener('keypress',function(event){
		 	// alert('something');
		 	console.log(event.keyCode);
		 	if(event.keyCode == 13){
		 		alert('You have pressed enter!!!');    //dupa ce scriu ....text ...+enter(13)=> pop-ul
		 
		 	} else {
		 		if(event.keyCode == 32){
		 			alert('Space!1');
		 		}
		 	}
		 	
		 });
*/

		 //var rezultat = nume + nume2 +nume3;    //CONCATENARE
		// console.log(rezultat);
		
        
        //CONCATENARE    => somethingsomething2
		function addNumbers(number1,number2){
			return number1+number2;
		}

		var rezultat=  addNumbers(number1,number2);
		console.log(rezultat);
		rezultat=addNumbers(20,30);//rezultat trece prinn doua stari
		console.log(rezultat);

		function concatString(string1,string2){
			return string1+string2;
		}

		var stringResult = concatString(string1,string2);
		console.log(stringResult);
   

       ///8somethingsomething2
       function addNumbers(value1,value2){
       		return value1+value2;
       }
       var concat= addNumbers(string1,string2);
       var add =addNumbers(number1,number2);
       console.log(add+concat);



       /// Scadere   ///impartire
       function addNumbers(value1,value2){
			return value1 + value2;
		}
		function minusNumbers(value1,value2){
			return value1 - value2;
		}
		function divideNumbers(value1,value2){
			return value1 / value2;
		}
		function multipleNumbers(value1,value2){
			return value1*value2;
		}
		var add = addNumbers(number1,number2);
        var minus = minusNumbers(add,number2);
        var divide = divideNumbers(add,number2);
        var multiple = multipleNumbers(add,number2);
        console.log(divide);
        console.log(multiple);


})();