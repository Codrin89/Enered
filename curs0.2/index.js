// <tr>
// 	<td>12.03.2016</td>
// 	<td>126 Lei</td>
// 	<td>12</td>
// 	<td>fast & Furious 8</td>
// 	<td>film de film</td>
// </tr>

(function() {

	var z = {
		date: "12.07.2017",
		sum: "190 ron",
		points: "44",
		movie: "Piratii din caraibe",
		description: "Fain filmu"
}

for(var i = 0 ; i < 20 ; i++) {
	createRow(z);
}
function createRow(z) {
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
	description.append(descriptionText);

	row.append(date);
	row.append(sum);
	row.append(points);
	row.append(movie);
	row.append(description);

	document.getElementsByTagName('tbody')[0].append(row);
}









})();