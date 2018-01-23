var letter = require('./letter.js');

function Word(target) {
	this.target = target;
	this.letterFound = [];
	this.found = false;

	this.getLet = function() {
		for (var i=0; i < this.target.length; i++) {
			this.letterFound.push( new letter(this.target[i]));
		}
	};

	this.findWord = function() {
		this.found = this.letterFound.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.letterFound.length; i++) {
			if (this.letterFound[i].charac == guessLet){
				this.letterFound[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.letterFound.length; i++){
			string += this.letterFound[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;
