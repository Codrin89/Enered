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
			}]

 }

   function createBoxes(elementsLength){
   	  for(var i=0;i<elementsLength;i++){
   	  	 var boxDiv = document.createElement('div');
   	  	 boxDiv.setAttribute('class','box');

         var headerH1 = document.createElement('h1');
   	  	 headerH1.setAttribute('class','text-center');
   	  	 var headerH1Text = document.createTextNode(data.items[i].title);
   	  	 headerH1.append(headerH1Text);
   	  	 boxDiv.append(headerH1);

   	  	 var padded = document.createElement('p');
   	  	 padded.setAttribute('class','text-left');
   	  	 var idded = document.createElement('i');
   	  	 var iddedText = document.createTextNode('Added  ');
   	  	 var iddedText2 = document.createTextNode(' ago');
   	  	 idded.append(iddedText);
   	  	 padded.append(idded);
   	  	 boxDiv.append(padded);
         

   	  	 var spanadd = document.createElement('span');
   	  	 var spanaddText = document.createTextNode(data.items[i].timestamp);
   	  	 spanadd.append(spanaddText);
   	  	 idded.append(spanadd);
   	  	 idded.append(iddedText2);

   	  	 var tagsDiv = document.createElement('div');
   	  	 tagsDiv.setAttribute('class','tags');
   	  	 boxDiv.append(tagsDiv);

   	  	 var span2add = document.createElement('span');
   	  	 var span2addText = document.createTextNode('Tags: ');
   	  	 span2add.append(span2addText);
   	  	 tagsDiv.append(span2add);

         var tags = data.items[i].tags;
         for(var j=0;j < tags.length;j++){
   	  	 var span3add = document.createElement('span');
   	  	 span3add.setAttribute('class','tags-box');
   	  	 var span3addText = document.createTextNode(tags[j] + " ");
   	  	 span3add.append(span3addText);
   	  	 tagsDiv.append(span3add);
   	  	 }

   	  	 var spanszadd = document.createElement('span');
   	  	 var spanszaddText = document.createTextNode('Size: ');
   	  	 spanszadd.append(spanszaddText);
   	  	 boxDiv.append(spanszadd);

         //de pus val
   	  	 var spanszvaladd = document.createElement('span');
   	  	 var spanszvaladdText = document.createTextNode((parseInt(data.items[i].size)/1048576).toFixed(2) + " MB");
   	  	 spanszvaladd.append(spanszvaladdText);
   	  	 boxDiv.append(spanszvaladd);


         document.getElementsByClassName('js-boxes')[0].append(boxDiv);
   	  }
   }
   createBoxes(3);
})();