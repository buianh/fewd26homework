$(document).ready(function(){


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 2 seconds
}


$('.hamburger-box').on("click", function() {
	$('.navigation').toggleClass('mobile-hide');
});

$('.email-btn').on("click", function() {
    $('.email-container-hide').toggleClass('email-container-show');
});

$('.close-btn').on("click", function() {
    $('.close-after-click').hide;
});




});
