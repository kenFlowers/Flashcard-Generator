
var BasicCard = function(front, back){
	if(!(this instanceof BasicCard)){
		return new BasicCard(front, back);
	}
	this.front = front,
	this.back = back
}

module.exports = BasicCard;


/*function basicCard(front,back, ques, answ, right, wrong){
	this.front = true;
	this.back = false;
	this.answ = "";
	this.ques = "";
	this.right = false;
	this.wrong = false;

}*/

