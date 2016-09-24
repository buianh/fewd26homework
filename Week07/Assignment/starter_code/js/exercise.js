$(document).ready(function(){
 $('#city-type').on("change", function () {
    event.preventDefault();
    var city = $('#city-type').val();
console.log(city);
if(city == "NYC") {
    $('body').css("background-image","url(images/nyc.jpg)");
}
else if(city == "SF") {
    $('body').css("background-image","url(images/sf.jpg)");
}
else if(city == "LA") {
    $('body').css("background-image","url(images/la.jpg)");
}
else if(city == "ATX") {
    $('body').css("background-image","url(images/austin.jpg)");
}
else if(city == "SYD") {
    $('body').css("background-image","url(images/sydney.jpg)");
}
else{
    $('body').css("background-image","url(images/citipix_skyline.jpg)");
}

 });  


});
