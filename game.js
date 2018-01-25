//Sets up the array of words that can be guessed. 
var wordBank = ["kylo ren", "darth vader", "obi wan kinobi", "luke", "darth maul", "jango fett", "jabba the hut", "padme", "han solo", "chewbacca", "mace windu", "yoda", "ewoks", "darth sideous", "general grievous", "leia", "greedo", "jar jar binks", "rey", "anakin"];

//Sets up a function that chooses the word and returns it back. Exports is used so that this function is accessible within other JS files. 
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*wordBank.length)+1);
	return wordBank[randNum];
}