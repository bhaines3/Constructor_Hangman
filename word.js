var letter = require('./letter.js');

function Word(target) {
	this.target = target;
	this.letterFound = [];
	this.underscores = []
	this.found = false;//note

	this.getLet = function() {
		for (var i=0; i < this.target.length; i++) {
			this.letterFound.push( new letter(this.target[i]));
		}
		this.generateUnderscores()
	};

	this.generateUnderscores = function () {
		for (var i = 0; i < this.letterFound.length; i++) {
			this.underscores.push(this.letterFound[i].letterRender())
		}
		this.consoleUnderscores()
	}

	this.findWord = function() {
		this.found = this.letterFound.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;//return true
	};

	this.checkLetter = function(guessLet) {
		for (var i = 0; i < this.letterFound.length; i++) {
			//if letter exists in the word. lets show that letter in the underscores array
			if (this.letterFound[i].decideLetterShown(guessLet)){
				this.underscores[i] = this.letterFound[i].letterRender()
			}
		}
		//should have an updated underscore array
		
		this.consoleUnderscores();
		var manyGuessed = this.doubleChecker(guessLet);
	 	return	manyGuessed;
	};


	this.doubleChecker = function (userGuess) {
		//loop over underscores to see id the user guess was in the underscores
		//if not we will return 0 if it is we'll return 1
		if(this.underscores.indexOf(userGuess) !== -1){
			return 1
		}
		else {
			return 0
		}		
	}

	this.consoleUnderscores = function(){
		console.log(this.underscores.join(" "))
	}
}

module.exports = Word;
