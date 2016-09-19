$(document).ready(function(){
 $('.container').on("change", "#city-type", function{
    event.preventDefault();
    var city = $('#city-type').val();

if(city == "NYC") {
    $('body').css("background-image","url(../images/nyc.jpg)");
}
if(city == "SF") {
    $('body').css("background-image","url(../images/sf.jpg)");
}
if(city == "LA") {
    $('body').css("background-image","url(../images/la.jpg)");
}
if(city == "ATX") {
    $('body').css("background-image","url(../images/austin.jpg)");
}
if(city == "SYD") {
    $('body').css("background-image","url(../images/sydney.jpg)");
}
else{
    $('body').css("background-image","url(../images/citipix_skyline.jpg)");
}

 });  


});
