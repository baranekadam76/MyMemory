//Playground Phase - building functionality first and organizing it all together later



//This is the countdown timer functionality

var duration = 0;
var now = 0;

function startTimer(value) {
	//Clears the current countdown timer
	clearInterval(timer); 
	document.getElementById('counter').innerHTML = '';

	now = value;
	timer = setInterval(countTimer, 1000);
	//'timer' variable must be global in order for the clearInterval function to shut down the timer
}

function countTimer() {
	var count = now - duration;

	if (count <= now && count > 1) {
		now--;
		var seconds = now;
		document.getElementById('counter').innerHTML = seconds + ' seconds';
	}
	else {
		clearInterval(timer); 
		document.getElementById('counter').innerHTML = 'Time is up!';	
	}
}

function endTimer() {
	clearInterval(timer); 
	document.getElementById('counter').innerHTML = 'Time is up!';
}
//----------------------------------------------------------------------------------

//See todoist list for next functionality to be built

