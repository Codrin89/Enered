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
			},
			{
				"id": 21313,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Client6757",
				"timestamp" : "12h",
				"tags" : ["tag2", "kgafkjg" , "presentation", "aegis", "company"],
				"size" : "3245134"
			},
			{
				"id": 11,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Client 23131",
				"timestamp" : "2h",
				"tags" : ["tag2", "client" , "presentation", "aegis", "company", "zmbrtz"],
				"size" : "945134"
			},
			{
				"id": 613,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Client 23131",
				"timestamp" : "2h",
				"tags" : ["tag2", "ppt" , "presentation", "aegis", "company", "ablehe"],
				"size" : "8513421"
			},
			{
				"id": 54678,
				"previewImg" : "slides/1.jpg",
				"title" : "Template for company fees",
				"timestamp" : "7h",
				"tags" : ["tag1", "fee" , "presentation", "dentsu", "aegis", "ppt", "financial", "client"],
				"size" : "545172"
			},
			{
				"id": 78798,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Welcome",
				"timestamp" : "29h",
				"tags" : ["tag767", "client" , "presentation", "dentsu", "aegis", "financial"],
				"size" : "7245134"
			}	

		]
	};
	function createElements(value) {
		for(var i = 0 ; i < value.length; i++){
            var box = document.createElement('div');
            box.setAttribute('class', 'box');
            var halfone = document.createElement('div');
            halfone.setAttribute('class', 'halfone');
            var halftwo = document.createElement('div');
            halftwo.setAttribute('class', 'halftwo');

            //create box elements

            var image = document.createElement('div');
            image.setAttribute('class', 'image');
            
            var title = document.createElement('h3');
            title.setAttribute('class', 'title');
            var little = document.createElement('p');
            little.setAttribute('class', 'little');
            var tags = document.createElement('h4');
            tags.setAttribute('class', 'tags');
            var lilboxes = document.createElement('div');
            lilboxes.setAttribute('class', 'lilboxes');
            	var lilbox = document.createElement('div');
            	lilbox.setAttribute('class', 'lilbox');
            	var numright = document.createElement('div');
            	numright.setAttribute('class', 'numright');
            var bottom = document.createElement('div');
            bottom.setAttribute('class', 'bottom');
            	var prev = document.createElement('div');
            	prev.setAttribute('class', 'prev');
            	var ptext = document.createElement('p');
            	ptext.setAttribute('class', 'ptext');
            	var img = document.createElement('img');
            	img.setAttribute('src', 'eye.png');
            	var downl = document.createElement('div');
            	downl.setAttribute('class', 'downl');
            	var ptext1 = document.createElement('p');
            	ptext1.setAttribute('class', 'ptext1');
            	var span = document.createElement('span');
            	span.setAttribute('class', 'glyphicon glyphicon-save');

            	// var label = document.createElement('label');
            	// var inputCheckbox = document.createElement('input');
            	// inputCheckbox.setAttribute('type','checkbox');
            	// inputCheckbox.setAttribute('data-size', value[i].size);
            	// var labelText = document.createElement('Select for download');

            	// create first box
            	halfone.append(image);
            	box.append(halfone);
            	document.getElementsByClassName('slides')[0].append(box);
		}
	}
	createElements(data.items);


})();