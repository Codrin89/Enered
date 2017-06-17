(function(){
	var data = {
			"items": [
			{
				"id": 4132,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Welcome",
				"timestamp" : "5h",
				"tags" : ["tag343", "welcome" , "presentation"],
				"size" : "2245134"
			},
			{
				"id": 131313,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Client",
				"timestamp" : "2h",
				"tags" : ["tag2", "cl213111111111111111111ient" , "presentation", "aegis", "company"],
				"size" : "32451341"
			},
			{
				"id": 34321,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Client31231",
				"timestamp" : "4h",
				"tags" : ["tag2", "ghifaghafg" , "presentation", "aegis", "company"],
				"size" : "541341"
			}
		]
	};

		
	function createElementsJs(){
		for(var i=0 ; i < data.items.length ; i++){
			//<div class="box">
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class' , 'box');

			//<h1 class="text-center">Titlu</h1>
			var h1 = document.createElement('h1');
			h1.setAttribute('class','text-center');
			var h1Text = document.createTextNode(data.items[i].title); //data.items e array de informatii
			h1.append(h1Text);

			//<p class="text-left"><i>Added <span>5h</span> ago</i></p>
			var paragraph = document.createElement('p');
			paragraph.setAttribute('class','text-left');
			var italic = document.createElement('i');
			var italicAdded = document.createTextNode('Added');
			var italicAdded = document.createTextNode('ago');
			var span = document.createElement('span');
			var spanText = document.createTextNode(data.items[i].timestamp);
			
			span.append(spanText);
			italic.append(italicAdded);
			italic.append(span);
			italic.append(italicAdded);
			paragraph.append(italic);


			//<div class="tags">
				//<span>Tags : </span>
				//<span class="tags-box">Tag1</span>
				//<span class="tags-box">Tag3</span>
				//<span class="tags-box">Tag5</span>
			//</div>
				var tagsDiv = document.createElement('div');
				tagsDiv.setAttribute('class','tags');
				var spanTitle = document.createElement('span');
				var spanTitleText = document.createTextNode('Tags :');
				spanTitle.append(spanTitleText);
				tagsDiv.append(spanTitle);

				for(var j = 0; j < data.items[i].tags.length ; j++){
					var spanTag = document.createElement('span');
					spanTag.setAttribute('class', 'tags-box');
					var spanTagText = document.createTextNode(data.items[i].tags[j]);
					spanTag.append(spanTagText);
					tagsDiv.append(spanTag);
				}
			    
			    //<span>Size : </span>
                //<span>12.3 Mb </span>
                var sizeTitle = document.createElement('span');
                var sizeTitleText = document.createTextNode('Size : ');
                sizeTitle.append(sizeTitleText);
                var sizeValue = document.createElement('span');
                var sizeValueText = document.createTextNode((parseInt(data.items[i].size) / 1048576).toFixed(2)); //1048576 bytes in megabytes;(2) cu 2 zecimale.
                sizeValue.append(sizeValueText);

                boxDiv.append(h1);
                boxDiv.append(paragraph);
                boxDiv.append(tagsDiv);
                boxDiv.append(sizeTitle);
                boxDiv.append(sizeValue);
					console.log(boxDiv);

				//last last level
			document.getElementsByClassName('create-boxes')[0].append(boxDiv);	
		}
	}

	createElementsJs();
})();