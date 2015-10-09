var eightBall = {
	index: 0,
	advice: ["Yes", "No", "Maybe", "It's worth a shot", "No way", "I wouldn't try it", "Of course", "Go for it", "Try again"],
	shake: function () {
		this.index = Math.floor(Math.random() * this.advice.length);
	},
	look: function() {
		return this.advice[this.index];
	}
};


$("#button").click(function(){
	var audio = new Audio('rollDice.mp3');
	audio.play();
    $(".target").effect( "shake", {times:4}, 1000 );
	eightBall.shake();
	$("#result").show( "slow" );
	$( "#result" ).html( "<b>Answer: </b> " + eightBall.look());
});
