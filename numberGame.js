var duration = 0;
var now = 0;
var numString = [];
var stopTrigger = 0;
var userInput = '';
var finalScore = 0;


//Timer functions
function numbersTimer(value) {
	if (value > 60) {
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
			numbersTimer(60);
			document.getElementById('numDisplay').innerHTML = 
			'<input type="text" maxlength="30" id="userAnswer">';
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
	for (var i = 0; i < 30; i++) {
		numString.push(Math.floor(Math.random() * 9));
	}

	document.getElementById('numDisplay').innerHTML = numString.join(' ');
}






function numAnswer() {
	var userArray = userInput.split('');
	document.getElementById('numDisplay2').innerHTML = '';

	for (var i = 0; i < 30; i++) {
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
	' Final Score: ' + finalScore + '/30</li>' + ' (To start a new game, refresh the page!)';

	switch (finalScore) {
		case 30:
			document.getElementById('numCounter').innerHTML = 'My god...';
			break;
		case 29:
		case 28:
		case 27:
		case 26:
			document.getElementById('numCounter').innerHTML = 'You\'re so close!';
			break;
	}

	if (finalScore <= 25 && finalScore >= 20) {
		document.getElementById('numCounter').innerHTML = 'You did very well!';
	}
	else if (finalScore <= 19 && finalScore >= 15) {
		document.getElementById('numCounter').innerHTML = 'Not bad honestly.';
	}
	else if (finalScore <= 14 && finalScore >= 9) {
		document.getElementById('numCounter').innerHTML = 'You can do better!';
	}
	else {
		document.getElementById('numCounter').innerHTML = 'Umm.. How can I put this..';
	}
}