



function testingsdf() {
	document.getElementById('itemDetails1').style.width = '10vw';
	document.getElementById('itemDetails1').style.height = '6vw';
	document.getElementById('itemDescOne').style.visibility = 'visible';
	document.getElementById('toolTipOne').innerHTML = '<button onclick="hideDetailOne()">' + 
	'Hide Details' + '</button>';
}


//Running into an issue when I use this function. Just doesnt seem to be doing anything.
function hideDetailOne() {
	document.getElementById('itemDetails1').style.width = '2vw';
	document.getElementById('itemDetails1').style.height = '2vw';
	document.getElementById('itemDescOne').style.visibility = 'hidden';
	document.getElementById('toolTipOne').innerHTML = '?';
}