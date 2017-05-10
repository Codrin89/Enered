(function(){
	
	document.getElementById('name').addEventListener('keyup',function(){  //validez nume=or error
		// alert('Alertaaaa');
		var names=['Ion','Maria','Vasile','FLorica','Gigel'];
		this.parentElement.classList.add('has-error');
		for(i=0;i<names.length;i++){
			if(names[i]==this.value){
				this.parentElement.classList.remove('has-error');
			}
		}
	});


	document.getElementById('varsta').addEventListener('keyup',function(){
		// alert('Alertaaaa');
		if(this.value>=18){
			this.parentElement.classList.remove('has-error');
		}else{
			this.parentElement.classList.add('has-error');
		}
	});


	document.getElementById('email').addEventListener('keyup',function(){
		var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(re.test(this.value)){
			this.parentElement.classList.remove('has-error');
		}else{
			this.parentElement.classList.add('has-error');
		}
	})




	document.getElementById('psw').addEventListener('keyup',function(){
		if(this.value.length > 7 && this.value.length <15){
			this.parentElement.classList.remove('has-error');
		}else{
			this.parentElement.classList.add('has-error');
		}
	})


	var interval=setInterval(function(){ //validare interval
		var dataEntry=document.getElementsByClassName('form-control');
		for(i=0;i<dataEntry.length;i++){
			if(dataEntry[i].value==''){
				return;
			} 			
		}
		if(document.getElementsByClassName('has-error').length>0){
			return;
		}
		for(i=0;i<dataEntry.length;i++){
			console.log(dataEntry[i].value);
		}
		clearInterval(interval);

	},500);




	document.getElementById('file').addEventListener('change',function(){
		console.log(this.files);
		if(this.files[0].size>2700){
			// alert('file is to big');
		}
		if(this.files[0].type!="image/jpg"){
			alert('type not supported');
		}else{
			alert('Ok file');
		}
	});

	document.getElementById('btn').addEventListener('click',function(){
		document.getElementById('file').click();
	});





})();