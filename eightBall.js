var eightBall = { 
	index: 0,
	advice: ["Yes", "No", "Maybe", "It's worth a shot", "No way", "I wouldn't try it", "Of course"],
	shake: function () {
		this.index = Math.floor(Math.random() * this.advice.length);
	},
	look: function() {
		return this.advice[this.index];
	}
};


$("#button").click(function(){
    $(".target").effect( "shake", {times:4}, 1000 );
	eightBall.shake();
	$("#result").show( "slow" );
	$( "#result" ).html( "<b>Answer: </b> " + eightBall.look());
	console.log(eightBall.look());
});
