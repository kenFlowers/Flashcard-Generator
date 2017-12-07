var BasicCard = require("./BasicCard");


var ClozeCard = function(text, cloze){
	if(!(this instanceof ClozeCard)){
		return new ClozeCard(text, cloze);
	}
	this.text = text,
	this.cloze = cloze,
	this.partial = text.replace(cloze, "...");
	this.IsCloze = function(){
		if(this.text.indexOf(this.cloze) >= 0){
			this.partial = text.replace(cloze, "...");

		}else{
			this.text = "Your cloze text is not present";
			this.cloze = "Fix your error!!";
			this.partial = "Text is not available";
		}
	}
}

ClozeCard.prototype.newCard = function(alpha, beta){
	var newCard = new BasicCard(alpha, beta);
}

module.exports = ClozeCard;