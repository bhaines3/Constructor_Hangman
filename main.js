var Word = require('./word.js');
var game = require('./game.js');
var letter = require('./letter.js');
var prompt = require('prompt');
console.log("---------------------------------------------------");
console.log("---------------------------------------------------");
console.log("Welcome to STAR WARS Constructor Hangman!");
console.log("Try to guess the name of a STAR WARS Character!!");
console.log("Maybe the force be with you!");
console.log("---------------------------------------------------");
console.log("---------------------------------------------------");
prompt.start();

var wordBank = ["Kylo Ren", "Darth Vader", "Obi Wan Kinobi", "Luke", "Darth Maul", "Jango Fett", "Jabba the Hut", "Padme", "Han Solo", "Chewbacca", "Mace Windu", "Yoda", "Ewoks", "Darth Sideous", "General Grievous", "Leia", "Greedo", "Jar Jar Binks", "Rey", "Anakin"]
var wordsGuessed = 0;
var guessesRemaining = 10;
var currentWord = null;

function startGame (word) {
	resetGuesses();
	currentWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);
	currentWord.getLet();
	promptUser();
}

function resetGuesses (){
 		guessesRemaining = 10;
};

function promptUser(){
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = currentWord.checkLetter(result.guessLet);

 			if(manyGuessed == 0) {
 				console.log("WRONG!, Try Again...");
 				guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT!, Good Job!");
 					if(currentWord.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + guessesRemaining);
 			console.log("-------------------");
 			if((guessesRemaining > 0) && (currentWord.found == false)){
 				promptUser();
 			}
 			else if(guessesRemaining == 0){
 				console.log("Game over. Correct Word was...", currentWord.target);
 			} else {
 				console.log(currentWord.wordRender());
 			}
 		});

 	}

startGame();