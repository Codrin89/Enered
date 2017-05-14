(function() {
	window.state = true;
	var boxes = document.getElementsByClassName("col-md-4");
	var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		for(var i = 0; i < boxes.length; i++) {
			boxes[i].addEventListener("click", function() {
				if(this.getAttribute('data-click') == null) {


				
				if(window.state) {
					this.getElementsByTagName('h1')[0].innerHTML = 'x';
					window.state = false;
					check(true);
				} else {
					this.getElementsByTagName('h1')[0].innerHTML = '0';
					window.state = true;
					check(false);
					}
					this.setAttribute("data-click", true)
				}

			});
		}

	


function check(state) {
	if(state) {
		for(var i = 0; i < win.length; i++) {
			var winner = true;
			for( var j = 0; j < 3; j++) {
				if(boxes[win[i][j]].getElementsByTagName('h1')[0].innerHTML != 'x') {
					winner = false;
				}; 
			}

			if(winner) {
				alert('x win the game');
				var line= document.getElementById("line");
				line.style.display = "block";
				//alert('0 is the winner!!!!');
				if(win[i][0]+1 == win[i][1]) {
					if(win[i][0] == 0) {
						line.style.marginTop = '10%'
					}
					if(win[i][0] == 6) {
						line.style.marginTop = '78%'
					}
				}
				if(win[i][0]+3 == win[i][1]) {
					line.classList.add('vertical');
					if(win[i][0] == 0) {
						line.style.marginLeft = '-24%'
					}
					if(win[i][0] == 2) {
						line.style.marginLeft = '45%'	
					}
				}

				if(win[i][0]+2 == win[i][1]) {
					line.classList.add('oblicD');
				}

				if(win[i][0]+4 == win[i][1]) {
					line.classList.add('oblicS');
				}
			}
		
		} 
	}else{

		for(var i = 0; i < win.length; i++) {
			var winner = true;
			for( var j = 0; j < 3; j++) {
				if(boxes[win[i][j]].getElementsByTagName('h1')[0].innerHTML != '0') {
					winner = false;
				}
			}

			if(winner) {
				alert('0 lose the game');
				var line= document.getElementById("line");
				line.style.display = "block";
				//alert('0 is the winner!!!!');
				if(win[i][0]+1 == win[i][1]) {
					if(win[i][0] == 0) {
						line.style.marginTop = '10%'
					}
					if(win[i][0] == 6) {
						line.style.marginTop = '78%'
					}
				}
				if(win[i][0]+3 == win[i][1]) {
					line.classList.add('vertical');
					if(win[i][0] == 0) {
						line.style.marginLeft = '-24%'
					}
					if(win[i][0] == 2) {
						line.style.marginLeft = '45%'	
					}
				}

				if(win[i][0]+2 == win[i][1]) {
					line.classList.add('oblicD');
				}

				if(win[i][0]+4 == win[i][1]) {
					line.classList.add('oblicS');
				}
			}

		}

	}

}


})();