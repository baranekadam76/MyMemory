var duration = 0;
var now = 0;
var numString = [];
var stopTrigger = 0;

function numbersTimer(value) {
	if (value > 31) {
		numMemory();
		now = value;
		timer = setInterval(countTimer, 1000);
	}
	else {
		now = value;
		timer = setInterval(countTimer, 1000);
	}
//'timer' variable must be global in order for the clearInterval function to shut down the timer
}

function countTimer() {
	var count = now - duration;

	if (count <= now && count > 1) {
		now--;
		var seconds = now;
		document.getElementById('numCounter').innerHTML = seconds + ' seconds';
	}
	else {
		clearInterval(timer); 
		document.getElementById('numCounter').innerHTML = 'Time is up!';
		document.getElementById('numDisplay').innerHTML = '';

		if (stopTrigger == 0) {
			stopTrigger++
			document.getElementById('numCounter').innerHTML = 'Start Answering!';
			numbersTimer(31);
			//Another function needs to run here to force user to start inputing answers
		}
		else {
			clearInterval(timer); 
			document.getElementById('numCounter').innerHTML = 'Time is up!';
			//Another function to display score and other stats
		}
	}
}



function numMemory() {
	
	for (var i = 0; i < 20; i++) {
		numString.push(Math.floor(Math.random() * 9));
	}

	document.getElementById('numDisplay').innerHTML = numString.join(' ');
}

function numAnswer() {

	document.getElementById('numDisplay').innerHTML = ;

}