(function() {
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

	function createElementsJs() {
		for(var i = 0 ; i < data.items.length ; i++) {
			//<div class="box">
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class', 'box');

			//<h1 class="text-center">titlu</h1>
			var heading = document.createElement('h1');
			heading.setAttribute('class','text-center');
			var headingText = document.createTextNode(data.items[i].title);
			heading.append(headingText);


			// <p class="text-left"><i>added <span>5h</span>ago</i></p>
			var paragraf = document.createElement('p');
			paragraf.setAttribute('class','text-left');
			var italic = document.createElement('i');
			var added = document.createTextNode('added');
			var ago = document.createTextNode('ago');
			var span = document.createElement('span');
			var spanText = document.createTextNode(data.items[i].timestamp);


			span.append(spanText);
			italic.append(added);
			italic.append(span);
			italic.append(ago);
			paragraf.append(italic);




			var tagsDiv = document.createElement('div');
			tagsDiv.setAttribute('class','tags');
			var spanTitle = document.createElement('span');
			var spanTitleText = document.createTextNode('Tags : ');
			spanTitle.append(spanTitleText);
			tagsDiv.append(spanTitle);

		for(var j = 0 ; j < data.items[i].tags.length ; j++) {
			var spanTag = document.createElement('span');
			spanTag.setAttribute('class', 'tags-box');
			var spanTagText = document.createTextNode(data.items[i].tags[j]);
			spanTag.append(spanTagText);
			tagsDiv.append(spanTag);
		
          }

	        // <span>Size : </span>
			//	<span>12.3 Mb</span>

			var sizeTitle = document.createElement('span');
			var sizeTitleText =  document.createTextNode('Size :');
			sizeTitle.append(sizeTitleText);
			var sizeValue = document.createElement('span');
			var sizeValueText =  document.createTextNode((parseInt(data.items[i].size) / 1048576).toFixed(2));
			sizeValue.append(sizeValueText);

			boxDiv.append(heading);
			boxDiv.append(paragraf);
			boxDiv.append(tagsDiv);
			boxDiv.append(sizeTitle);
			boxDiv.append(sizeValue);
			
			document.getElementsByClassName('create-boxes')[0].append(boxDiv);

		}
	}


		createElementsJs();
})();