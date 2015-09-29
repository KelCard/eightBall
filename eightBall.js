$(function() {
	
	
	
});



var eightBall = { 
	index: 0,
	advice: ["yes", "no", "maybe", "it's worth a shot", "no way"],
	shake: function () {
		this.index = Math.floor(Math.random() * this.advice.length);
	},
	look: function() {
		return this.advice[this.index];
	}
};
eightBall.shake();
console.log(eightBall.look());