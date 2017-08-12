(function(){

	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://localhost/api/get', true);
	xhr.onreadystatechange = function(){
		if(xhr.status == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
		}
	}
	xhr.send();




})();