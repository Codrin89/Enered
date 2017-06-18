(function() {
	var data = {
			"items": [
			{
				"id": 4132,			
				"title" : "Template Welcome",
				"timestamp" : "5h",
				"tags" : ["tag343", "welcome" , "presentation"],
				"size" : "2245134"
			},
			{
				"id": 131313,		
				"title" : "Template Client",
				"timestamp" : "2h",
				"tags" : ["tag2", "cl213111111111111111111ient" , "presentation", "aegis", "company"],
				"size" : "32451341"
			},
			{
				"id": 34321,
				"title" : "Template Client31231",
				"timestamp" : "4h",
				"tags" : ["tag2", "ghifaghafg" , "presentation", "aegis", "company"],
				"size" : "541341"
			}
		]
	};


			//<div class="box">
			//	<h1 class="text center">Titlu</h1>
				//<p class="text-left"><i>Added <span>5h</span>ago</i></p>
				//<div class="tags">
					//<span>Tags : </span>
					//<span class="tags-box">Tag1</span>
					//<span class="tags-box">Tag2</span>
					//<span class="tags-box">Tag3</span>
				//</div>
				//<span>Size : </span>
				//<span>12.3 Mb</span>

function createElementsJs(){
	for (var i = 0; i < data.items.length; i++) {
		var box = document.createElement('div');
		box.setAttribute('class', 'box');

		var headingH1 = document.createElement('h1');
		headingH1.setAttribute('class', 'text-center');
		var headingH1Text = document.createTextNode(data.items[i].title);
		headingH1.append(headingH1Text);

		var p = document.createElement('p');
		p.setAttribute('class', 'text-left');
		var italic = document.createElement('i');
		var text1 = document.createTextNode('Added');
		
		var span = document.createElement('span');
		console.log(data.items[i]);
		var spanTimp = document.createTextNode(data.items[i].timestamp);
	
		
		var text2 = document.createTextNode('ago');

		
		span.append(spanTimp);
		italic.append(text1);
		italic.append(span);
		italic.append(text2);
		p.append(italic);

		var tagsDiv = document.createElement('div');
		tagsDiv.setAttribute('class', 'tags');

		var spanTitle = document.createElement('span');
		var textTags = document.createTextNode('Tags : ');
		spanTitle.append(textTags);
		tagsDiv.append(spanTitle);
		

		for (j = 0; j < data.items[i].tags.length; j++) {
			var spanTag = document.createElement('span');
			spanTag.setAttribute('class', 'tags-box');
			var spanTagText = document.createTextNode(data.items[i].tags[j]);
			spanTag.append(spanTagText);
			tagsDiv.append(spanTag);		
		}


		var spanSize = document.createElement('span');
		var textSize = document.createTextNode('Size:');
		spanSize.append(textSize);
		var spanVal = document.createElement('span');
		var textSizeVal = document.createTextNode(parseInt(data.items[i].size / 1048576).toFixed(2));
		spanVal.append(textSizeVal);

		box.append(headingH1);
		box.append(p);
		box.append(tagsDiv);    
		box.append(spanSize);
		box.append(spanVal);

		document.getElementsByClassName('create-boxes')[0].append(box);

	}
}

createElementsJs();

})();