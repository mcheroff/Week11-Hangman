var game = require("./game.js");
var word = require("./word.js");
var prompt = require("prompt");

prompt.start();

game = {
	
	wordsCorrect : 0,
	guessesRemaining : 10,
	currentWrd : null,
	startGame : function (wrd){
		
		this.resetGuessesRemaining();

		
		this.currentWrd = new Word.Word(Game.Game.wordBank[Math.floor(Math.random()* Game.Game.wordBank.length)]);
		this.currentWrd.getAllLetters();

		this.currentWrd.wordRender();
		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(["guessLetter"], function(err, result) {
		    
		    
		    console.log("The letter or space you guessed is: " + result.guessLetter);

		    
		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    
		    if (findHowManyOfUserGuess == 0){
		    	console.log("You guess was incorrect");
		    	self.guessesRemaining--;
		    }else{
		    	console.log("Your guess was correct");
		    	game.wordsCorrect++;

		    	
	    		if(self.currentWrd.didWeFindTheWord(game.wordsCorrect)){
			    	console.log("You won the game!");
			    	return;
			    }
		    }
		    
		    console.log("Guesses remaining: ", self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());
		    console.log("These are the letters you've guessed already: ");

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log("Game over", self.currentWrd.word);
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}
};

game.startGame();