
(function(){
	var data ={

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
	console.log(data);
	function populateTable(){
		for(var i=0;i<data.items.length;i++){

			var div =document.createElement('div');
			div.setAttribute('class','box');
			var text =document.createElement('h1');
			text.setAttribute('class','text-center');
			var h1t= document.createTextNode(data.items[i].title);
			text.append(h1t);


			var peul=document.createElement('p');
			peul.setAttribute('class','text-left');
			var iul=document.createElement('i');
			var inputText =document.createTextNode('Added ');

			var iSpan=document.createElement('Span');
			var spanText =document.createTextNode(data.items[i].timestamp);
			var inputText2 =document.createTextNode(' ago');


			var tagsDiv =document.createElement('div');
			tagsDiv.setAttribute('class','tags');
			var tagsBox=document.createElement('span');
			var spanTitleText =document.createTextNode(' Tags: ');
			tagsBox.append(spanTitleText);
			tagsDiv.append(tagsBox);
			//for



			div.append(text);
			iul.append(inputText);
			iSpan.append(spanText);
			iul.append(iSpan);
			iul.append(inputText2);
			peul.append(iul);
			div.append(peul);


			for(var j=0 ;j<data.items[i].tags.length;j++){
				var spanTag=document.createElement('span');
				spanTag.setAttribute('class','tags-box');
				var spanTagsText =document.createTextNode(data.items[i].tags[j]);
				spanTag.append(spanTagsText);
				tagsDiv.append(spanTag);
			}

			var sizeTitle= document.createElement('span');
			var sizeTitleText=document.createTextNode('Size: ');
			sizeTitle.append(sizeTitleText);
			var sizeValue =document.createElement('span');
			var sizeValueText= document.createTextNode((parseInt(data.items[i].size)/1048576).toFixed(2));
			sizeValue.append(sizeValueText);

			div.append(text);
			div.append(peul);
			div.append(tagsDiv);
			div.append(sizeTitle);
			div.append(sizeValue);

			document.getElementsByClassName('create-boxes')[0].append(div);
		}
	}
	populateTable(data.items);
})();
