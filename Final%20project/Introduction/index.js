$(document).ready(function(){


	$('.readmore').on("click", function(){
		event.preventDefault();
		$("#show-this-on-click").slideDown();
		$(".readmore").hide();
		$(".readless").show();
	});

		$('.readless').on("click", function(){
		event.preventDefault();
		$(".hide").hide();
		$(".readmore").show();
	});

	$('.learnmore').on("click", function(){
		event.preventDefault();
		$(".learnmore").hide();
		$("#learnmoretext").slideDown();

	});

});
