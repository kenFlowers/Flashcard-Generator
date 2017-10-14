const f = require('flashcardz');

f.addHistoryEvent(stack, id, recalled, time)

const cards = [
	{
		front: "Example question",
		back: "Example answer",
		history: [
		  {
		  	time: new Date(),
		  	recalled: true
		  }
		]
	},
	{
		front: "Example question 2",
		back: "Example answer 2",
		history: [
		  {
		  	time: new Date(),
		  	recalled: true
		  }
		]
	},

]

cards = f.gotwrong(cards, 0);
cards[0].history; //contains another event where the card was gotten wrong ( recalled: false)

cards = f.gotright(cards, 1);
cards[1].history; //contains another event where the card was gotten right ( recalled: true)



/*function basicCard(front,back, ques, answ, right, wrong){
	this.front = true;
	this.back = false;
	this.answ = "";
	this.ques = "";
	this.right = false;
	this.wrong = false;

}*/

/*I'm honestly struggling right now,  i'm sorry for the unfinished code
it started with me looking for an api to kind of handle all the work instead of building 
my own constructor . */