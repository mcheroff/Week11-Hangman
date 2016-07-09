var letter = require("./letter.js");

var word = function(wordFunction){
	
	this.word = wordFunction;

	
	this.lettersObjectsArray = [];

	
	this.found = false;

	this.getLetters = function(){
		
		for(i=0;i<this.word.length;i++){

			this.lettersObjectsArray.push(new Letter.Letter(this.word[i]));
		}
		
	};

	
	this.didWeFindTheWord = function(wildParameter) {
		
		if(wildParameter === this.lettersObjectsArray.length){
			this.found = true;
		} 
		return this.found;
	};

	this.checkifLetterCorrect = function(guessedLetter) {
		
		var totalCharactersMatched = 0;

		for(i=0;i<this.lettersObjectsArray.length;i++){
			if(guessedLetter === this.lettersObjectsArray[i].theCharacterInLetter){
				this.lettersObjectsArray[i].appear = true;
				console.log("You have found a match");
				totalCharactersMatched++;
			};

		}
		
		return totalCharactersMatched;
	};

	this.wordRender = function() {
		
		var theStringOfRender = "";
		
		for(i=0;i<this.lettersObjectsArray.length;i++){
			
			theStringOfRender += this.lettersObjectsArray[i].letterToDisplay();;
		}

		return theStringOfRender;
		
	};
}

exports.word = word;