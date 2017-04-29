(function()	 {
alert();
var z = {
	date: "12.07.2017",
	sumn: "190 RON",
	points: "44",
	movie: "Piratii din Caraibe",
	description: "Fain filmul"
}

var row = document.createElement('tr');

var date = document.createElement('td');
var dateText = document.createTextNode(z.date);
date.append(dateText);

var sum = document.createElement('td');
var sumText = document.createTextNode(z.sum);
sum.append(sumText);

var points = document.createElement('td');
var pointsText = document.createTextNode(z.points);
points.append(pointsText);

var movie = document.createElement('td');
var movieText = document.createTextNode(z.movie);
movie.append(movieText);

var description = document.createElement('td');
var descriptionText = document.createTextNode(z.description);
description.append(desctiptionText);


row.append(date);
row.append(sum);
row.append(points);
row.append(movie);
row.append(description);

document.getElementsByTagName('tbody')[0].append(row);













})();