(function(){

function searchButton(){
	document.getElementById('search').addEventListener('click',function(){
        if(document.getElementById('mysearch').style.display == 'block'){
        	document.getElementById('mysearch').style.display = 'none';
        }
        else{
        	document.getElementById('mysearch').style.display = 'block';
        }
        
	});
};
searchButton();

})();