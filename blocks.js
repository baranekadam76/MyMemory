var blockObj = {
	'color': ['blue', 'red', 'green', 'pink', 'black'],
	'size': ['small', 'large'],
	'difficulty': ['easy', 'medium', 'hard']
};

var size = '';
var color = '';

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
	]
};

var answers = [];



//Starts a game on Easy difficulty
function easyGame() {

	//Clear the playing field
	document.getElementById('patterns').innerHTML = '';
	document.getElementById('question').innerHTML = '';

	//Establish the randomized variables, create the blocks, apply variables
	for (var i = 0; i < 6; i++) {
		size = blockObj.size[Math.floor(Math.random() * 2)];
		color = blockObj.color[Math.floor(Math.random() * 5)]

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
	}

	genQuest(3);

}


//Generates the questions to answer
function genQuest(value) {
	var random1 = 0;
	
	for (var i = 0; i < value; i++) {
		
		if (random1 == 0) {
			document.getElementById('question').innerHTML += '<div>' + 
			questionObj.color[Math.floor(Math.random() * 5)] + '</div>' + '<input type="number" id="questions' + i + '">';

			random1++;
		}
		else if (random1 == 1) {
			document.getElementById('question').innerHTML += '<div>' + 
			questionObj.size[Math.floor(Math.random() * 2)] + '</div>' + '<input type="number" id="questions' + i + '">';

			random1++;
		}
		else if (random1 == 2) {
			document.getElementById('question').innerHTML += '<div>' + 
			questionObj.sequence[Math.floor(Math.random() * 2)] + '</div>' + 
			'<input type="text" id="questions' + i + '" placeholder="separate each color by a space">';

			random1 = 0;
		}
	}

}


function ansQuest(value) {
	
	for (var i = 0; i < value; i++) {
		answers[i].push(document.getElementById('questions' + i).value);
	}


}