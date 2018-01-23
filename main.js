var Word = require('./word.js');
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



game = {
    wordBank: ["Kylo Ren", "Darth Vader", "Obi Wan Kinobi", "Luke", "Darth Maul", "Jango Fett", "Jabba the Hut", "Padme", "Han Solo", "Chewbacca", "Mace Windu", "Yoda", "Ewoks", "Darth Sideous", "General Grievous", "Leia", "Greedo", "Jar Jar Binks", "Rey", "Anakin"],
 	wordsGuessed: 0,
 	guessesRemaining: 10,
 	currentWord: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWord.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG, Try Again");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT, Good Job");
 					if(self.currentWord.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word was...", self.currentWord.target);
 			} else {
 				console.log(self.currentWord.wordRender());
 			}
 		});

 	}


};

game.startGame();