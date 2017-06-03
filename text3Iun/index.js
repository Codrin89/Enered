(function() {

		var button = document.getElementById('hide1');
		button.onclick = function () {
			document.getElementById('slide').style.display = "none";
		}
		var button = document.getElementById('hide2');
		button.onclick = function() {
			document.getElementById('final').style.display = "none";
		}
		var button = document.getElementById('hide3');
		button.onclick = function() {
			document.getElementById('slide').style.display = "block";
			document.getElementById('final').style.display = "block";
		}
		document.getElementById('ama').addEventListener('click' , function() {
			var input = document.createElement('input');
			input.setAttribute('type', 'text');
			input.setAttribute('class', 'form-control');
			document.getElementById('final').append(input);
		
		});
		document.getElementById('bam').addEventListener('click' ,function() {
			var inputs = document.getElementsByClassName('form-control');
			var sum = 0;
			for (var i = 0; i < inputs.lenght; i++) {
				sum += parseInt(inputs[i].value);
			}
			document.getElementById('result').innerHTML = sum;

		});
		document.getElementById('cam').addEventListener('click' , function() {
			var max = document.createElement('sum');
		});
})();