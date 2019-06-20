var duration = 0;
var now = 0;
var numString = [];
var stopTrigger = 0;
var userInput = '';
var finalScore = 0;

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

		if (stopTrigger == 0) {
			stopTrigger++
			document.getElementById('numCounter').innerHTML = 'Answer!';
			numbersTimer(31);
			document.getElementById('numDisplay').innerHTML = 
			'<input type="text" maxlength="20" id="userAnswer">';
		}
		else {
			clearInterval(timer); 
			document.getElementById('numCounter').innerHTML = 'Time is up!';
			userInput = document.getElementById('userAnswer').value;
			numAnswer();//Another function to display score and other stats
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
	var userArray = userInput.split('');
	document.getElementById('numDisplay2').innerHTML = '';

	for (var i = 0; i < 20; i++) {
		if (numString[i] == userArray[i]) {
			finalScore++;
			document.getElementById('numDisplay2').innerHTML += '<li style="color: green;">' + 
			userArray[i] + '</li>' + '-';
		}
		else {
			document.getElementById('numDisplay2').innerHTML += '<li style="color: red;">' + 
			userArray[i] + '</li>' + '-';
		}
	}

	document.getElementById('numDisplay2').innerHTML += '<li style="color: blue;">' + 
	'Final Score: ' + finalScore + '</li>';
}