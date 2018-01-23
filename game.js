//Sets up the array of words that can be guessed. 
var words = ["Kylo Ren", "Darth Vader", "Obi Wan Kinobi", "Luke", "Darth Maul", "Jango Fett", "Jabba the Hut", "Padme", "Han Solo", "Chewbacca", "Mace Windu", "Yoda", "Ewoks", "Darth Sideous", "General Grievous", "Leia", "Greedo", "Jar Jar Binks", "Rey", "Anakin"];

//Sets up a function that chooses the word and returns it back. Exports is used so that this function is accessible within other JS files. 
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}