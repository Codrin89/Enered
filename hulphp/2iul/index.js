(function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://localhost/API/get', true);

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
				console.log(JSON.parse(xhr.responseText));
		}
	}
	xhr.send();
})();