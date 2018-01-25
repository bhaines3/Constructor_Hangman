var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
	this.decideLetterShown = function (userGuess){
		//controll wither or not a letter was found
		if(userGuess === this.charac){
			this.appear = true
			return true
		 
		}else{
			return false
		}
	}
};

//export the constructor
module.exports = letter;