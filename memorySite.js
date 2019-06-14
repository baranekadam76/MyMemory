//Playground Phase - building functionality first and organizing it all together later



//This is the countdown timer functionality - play with it some more

var duration = 0;
var now = 5 + 1; //Really this is equal to 5 seconds as the duration

var timer = setInterval(timer, 1000);

function timer() {
	var count = now - duration;

	if (count <= now && count > 1) {
		now--;
		var seconds = now;

		document.getElementById('counter').innerHTML = seconds + ' seconds';
	}
	else {
		document.getElementById('counter').innerHTML = 'The countdown has finished';
	}

}