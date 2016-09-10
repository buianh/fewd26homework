// Create varibale to store the score
	//update #result
var score = 0;


//On click #add5, add 5 to the score
	//update #result
jQuery('#add5').on("click", function() {
	score = score + 5;
	jQuery('#result').text(score);
});

//jQuery('#add5').click(add5);
	//function add5() {
		//score = score + 5;
	//};
//jQuery('#result').text(score);

//On click #add10, add 10 to the score
	//update #result

jQuery('#add10').on("click", function() {
	score = score + 10;
	jQuery('#result').text(score);
});


//On click #sub1, minus 1 to the score
	//update #result

jQuery('#sub1').on("click", function() {
	score = score - 1;
	jQuery('#result').text(score);
});


//On click #zero, zero score
	//update #result
jQuery('#zero').on("click", function() {
	score = 0;
	jQuery('#result').text(score);
});