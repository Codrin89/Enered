(function(){
	window.state = true;
	var boxes = document.getElementsByClassName('col-md-4');
	var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	for(var i=0;i<boxes.length;i++){
		boxes[i].addEventListener('click', function(){
			if(this.getAttribute('data-click') == null){				
				if(window.state){
					this.getElementsByTagName('h1')[0].innerHTML='x';
					check(true);
					window.state=false;
				}else{
					this.getElementsByTagName('h1')[0].innerHTML='o';
					check(false);
					window.state=true;
				} 
				this.setAttribute('data-click', true);
			};
		});
	}

function check(state){
	if(state){
		for(var i=0;i<win.length;i++){
			var winner = true;
			for(var j=0;j<3;j++){
				if(boxes[win[i][j]].getElementsByTagName('h1')[0].innerHTML != 'x'){
					winner = false;
				};
			}
			if(winner){
				var line = document.getElementById('line');
				line.style.display = "block";
				if(win[i][0]+1 ==win[i][1]){
					if(win[i][0] == 0){
						line.style.marginTop = "13%";
					}
					if(win[i][0] == 6){
						line.style.marginTop = "78%";
					}
				}
				if (win[i][0]+3 == win[i][1]){
					line.classList.add('vertical');
					if(win[i][0] == 0){
						line.style.marginLeft = "-24%";
					}
					if(win[i][0] == 2){
						line.style.marginLeft = "38%";
					}
				}
				if(win[i][0]+2 == win[i][1]){
					line.classList.add('dreapta');

				}
				if(win[i][0]+4 == win[i][1]){
					line.classList.add('stanga');
				}
			}
		}
	}else{
		for(var i=0;i<win.length;i++){
			var winner = true;
			for(var j=0;j<3;j++){
				if(boxes[win[i][j]].getElementsByTagName('h1')[0].innerHTML != 'o'){
					winner = false;
				};
			}
			if(winner){
				var line = document.getElementById('line');
				line.style.display = "block";
				if(win[i][0]+1 ==win[i][1]){
					if(win[i][0] == 0){
						line.style.marginTop = "13%";
					}
					if(win[i][0] == 6){
						line.style.marginTop = "78%";
					}
				}
				if (win[i][0]+3 == win[i][1]){
					line.classList.add('vertical');
					if(win[i][0] == 0){
						line.style.marginLeft = "-24%";
					}
					if(win[i][0] == 2){
						line.style.marginLeft = "38%";
					}
				}
				if(win[i][0]+2 == win[i][1]){
					line.classList.add('dreapta');

				}
				if(win[i][0]+4 == win[i][1]){
					line.classList.add('stanga');
				}
			}
		}
	}
}


})();