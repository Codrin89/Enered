(function(){
    document.getElementById('login').addEventListener('click',function(){
        var loginData = {
        	"username" : document.getElementById('username').value,
        	"password" : document.getElementById('password').value
        }

        var xhr = new XMLHttpRequest();
        xhr.open("POST",'http://localhost/api/login-data',true);

        xhr.onreadystatechange = function(){//call a function when
            if(xhr.readyState == 4 && xhr.status == 20){
            	console.log(xhr.responseText);
            }
        } 

        xhr.send(JSON.stringify(loginData));

    });
})();