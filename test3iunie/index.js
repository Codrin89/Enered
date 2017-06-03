(function(){


    var button = document.getElementById('btn1');  

button.onclick = function() {
    var div = document.getElementById('container2');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
  


    var button = document.getElementById('btn2');  

button.onclick = function() {
    var div = document.getElementById('container3');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

   var button = document.getElementById('btn3');  

button.onclick = function() {
    var div = document.getElementById('container2','container3');
     var div = document.getElementById('container3');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};




    document.getElementById('add').addEventListener('click',function(){
        var input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('id','insert');
        document.getElementById('container3').append(input);
    });



    document.getElementById('sum').addEventListener('click',function(){
    var calcul = document.getElementById('rezultat-suma');
    var total = 0;
    for(var i = 0;i < calcul.length; i++){
    total += parseInt(calcul[i].value);
    }
    document.getElementById('rezultat-suma').innerHTML = total;

});


    document.getElementById('minmax').addEventListener('click',function(){
    var inputs = document.getElementById('rezultat');
    var max = parseInt(inputs[0].value);
    var min = parseInt(inputs[0].value);
    for(var i = 0; i < inputs.length; i++){
     if( max < parseInt(inputs[i].value)){
        max = parseInt(inputs[i].value);
    }
     if( min > parseInt(inputs[i].value)){
        min = parseInt(inputs[i].value);
    }
    
    }



    document.getElementById('rezultat').innerHTML += max ;
    document.getElementById('rezultat').innerHTML += min;
});


})();