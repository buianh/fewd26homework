jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
$("#purpleBox").on("click", function(){
	$("p").css("color","black");
	$("p").css("color","purple");
});

    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black
$("#blueBox").on("click", function(){
	$("p").css("color","black");
	$("p.hipsterSpeak").css("color","white");
	$("p.hipsterSpeak").css("background","blue");
});

    // When the red box is clicked set the list items toggle red background and white text on and off

    $("#redBox").on("click", function(){
	$("p").css("color","black");
	$("li").toggleClass("redForm");
});


    // When any of the boxes are clicked, add a 6px solid black bottom border
  $(".boxes").on("click", function(){
	$("p").css("color","black");
	$(".boxes").css("border-bottome","6px solid black");
});

    


});