var blockObj = {
	'color': ['blue', 'red', 'green', 'pink', 'black'],
	'size': ['small', 'large'],
	'difficulty': ['easy', 'medium', 'hard']
};

var size = '';
var color = '';
var color1 = '';
var size1 = '';

var questionObj = {
	'color': [
		'How many blue blocks were there?',
		'How many red blocks were there?',
		'How many green blocks were there?',
		'How many pink blocks were there?',
		'How many black blocks were there?'
	],
	'size': ['How many small blocks were there?', 'How many large blocks were there?'],
	'sequence': [
		'What was the color sequence of the blocks from left to right?',
		'What was the size sequence of the blocks from left to right?'
	],
	'questCompare': []
};

//User answers
var answers = [];

//Actual answers
var colorSeq = [];
var sizeSeq = [];
var colorNum = {
	'blue': 0,
	'red': 0,
	'green': 0,
	'pink': 0,
	'black': 0
};
var sizeNum = {
	'small': 0,
	'large': 0
};

//User score
var userScore = [];



//Starts a game on Easy difficulty
function easyGame() {
	clearGame();
	genVariables(6);
	//Timer goes here
	genQuest(3);
}




//Generates the questions and then adds them to a blank object array for question comparison later
function genQuest(num2) {
	var random1 = 0;
	var colorQuest = questionObj.color[Math.floor(Math.random() * 5)];
	var sizeQuest = questionObj.size[Math.floor(Math.random() * 2)];
	var seqQuest = questionObj.sequence[Math.floor(Math.random() * 2)];
	
	for (var i = 0; i < num2; i++) {
		
		if (random1 == 0) {
			document.getElementById('question').innerHTML += '<div id="gameQuest' + i + '">' + 
			colorQuest + '</div>' + '<input type="number" id="questions' + i + '">';

			questionObj.questCompare.push(colorQuest);
			random1++;
		}
		else if (random1 == 1) {
			document.getElementById('question').innerHTML += '<div id="gameQuest' + i + '">' + 
			sizeQuest + '</div>' + '<input type="number" id="questions' + i + '">';

			questionObj.questCompare.push(sizeQuest);
			random1++;
		}
		else if (random1 == 2) {
			document.getElementById('question').innerHTML += '<div id="gameQuest' + i + '">' + 
			seqQuest + '</div>' + '<input type="text" id="questions' + i + 
			'" placeholder="separate each color by a space">';

			questionObj.questCompare.push(seqQuest);
			random1 = 0;
		}
	}

}


//Submits the user's answers for review and score
function ansQuest(num) {

	if (document.getElementById('questions0').value == '' || 
		document.getElementById('questions1').value == '' || 
		document.getElementById('questions2').value == '') {

		document.getElementById('questError').innerHTML = 'Please fill out all fields.';
	}
	else {
		for (var i = 0; i < num; i++) {
			answers.push(document.getElementById('questions' + i).value);
		}

		//These variables needed to be set to do comparison for question 3
		color1 = colorSeq.join(' ');
		size1 = sizeSeq.join(' ');

		//Clear the error if applicable
		document.getElementById('questError').innerHTML = '';

		//Comparing user answers to actual answers and pushing score to a new array for evaluation
		//Question 1
		switch(questionObj.questCompare[0]) {
			case 'How many blue blocks were there?':
				colorNum.blue == answers[0] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
			case 'How many red blocks were there?':
				colorNum.red == answers[0] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
			case 'How many green blocks were there?':
				colorNum.green == answers[0] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
			case 'How many pink blocks were there?':
				colorNum.pink == answers[0] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
			case 'How many black blocks were there?':
				colorNum.black == answers[0] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
		}

		//Question 2
		switch(questionObj.questCompare[1]) {
			case 'How many small blocks were there?':
				sizeNum.small == answers[1] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
			case 'How many large blocks were there?':
				sizeNum.large == answers[1] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
		}

		//Question 3
		switch(questionObj.questCompare[2]) {
			case 'What was the color sequence of the blocks from left to right?':
				color1 == answers[2] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
			case 'What was the size sequence of the blocks from left to right?':
				size1 == answers[2] ? userScore.push('Correct') : userScore.push('Incorrect');
				break;
		}

		//Clear the questions interface
		document.getElementById('question').innerHTML = '';

		//Printing score results to the screen
		document.getElementById('patterns').innerHTML = 'Question 1: ' + userScore[0] + 
		'Question 2: ' + userScore[1] + 'Question 3: ' + userScore[2];
	}
}



//Clear the playing field and variables
function clearGame() {
	document.getElementById('patterns').innerHTML = '';
	document.getElementById('question').innerHTML = '';
	answers = [];
	colorSeq = [];
	sizeSeq = [];
	colorNum = {
		'blue': 0,
		'red': 0,
		'green': 0,
		'pink': 0,
		'black': 0
		};
	sizeNum = {
		'small': 0,
		'large': 0
	};
	userScore = [];
	color1 = '';
	size1 = '';
	questionObj.questCompare = [];
}


//Establish the randomized variables, create the blocks, apply variables
function genVariables(num1) {
	for (var i = 0; i < num1; i++) {
		size = blockObj.size[Math.floor(Math.random() * 2)];
		color = blockObj.color[Math.floor(Math.random() * 5)];

		document.getElementById('patterns').innerHTML += '<div id=\"block' + 
		i + '\"></div>';
		document.getElementById('block' + i).style.backgroundColor = color;


		if (size == 'small') {
			document.getElementById('block' + i).style.width = '75px';
			document.getElementById('block' + i).style.height = '75px';
		}
		else if (size == 'large') {
			document.getElementById('block' + i).style.width = '125px';
			document.getElementById('block' + i).style.height = '125px';
		}

		//Assigns the actual answers to new variables to be compared against user's answers
		colorNum[color]++;
		sizeNum[size]++;
		colorSeq.push(color);
		sizeSeq.push(size);
	}
}