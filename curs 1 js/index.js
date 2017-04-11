(function () {
    // function addEventListener(event, funtia)
    var number1 = 3;
    var number2 = 5;
    var string1 = 'something';
    var string2 = 'something';

    function addNumbers(value1, value2) {
    	  return value1 + value2;
    }
    function minusNumbers(value1, value2) {
    	  return value1 - value2;
    }
    function divideNumbers(value1, value2) {
    	return value1 / value2;
    }
    function multiplyNumbers(value1, value2) {
    	return value1 * value2;
    }

    var add = addNumbers (number1,number2);
    var minus = minusNumbers (add, number2);
    var divide = divideNumbers(add, number2);
    var multiply = multiplyNumbers (add, number2);
    console.log(multiply);

    var radical=Math.sqrt(minus) + '';
    var resultArray = radical.split('');
    for (var i = 0; i < resultArray.lenght ; i++) {
    	if(resultArray[i] == '.') {
          console.log('punct');
    	}
    }



  /* function concatStrings(string1, string2) {
   	  return string1+string2;
   }

     var stringResult = addNumbers(string1, string2);
    console.log(stringResult);

    var concat = addNumbers(string1, string2);
    var add = addNumbers(number1, number2);
    console.log(add+concat);


	document.getElementById('button').addEventListener('click', function(){
       clickValidator(this);
	});


	function clickValidator(button) {
         var inputValue = document.getElementById('input-data');
         console.log(inputValue.value);
   	}

   	document.getElementsByTagName('body')[0].addEventListener('keypress', function(event) {
           console.log(event.keyCode);
           if(event.keyCode == 13) {
           	  alert('You have pressed enter!!!');
           } else {
           	    if (event.keyCode == 32) {
           	    	alert('You have pressed space!!');}
           	    	else {
           	    		alert('You have pressed something else');

           	    	}
           	    }
            
   	})

    var rezultat = nume + nume2 + nume3;
    console.log(rezultat); */




})();