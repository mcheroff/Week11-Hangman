var Letter = function(inputLetter){

	this.character = inputLetter;

	this.appear = false;

	this.letterRender = function(){

		if(this.appear === true){
			return this.character;
		} else if(this.character == " "){
			this.appear = true;
			return this.character;
		} else{
			return "__";
		}
	}
};

module.exports = Letter;