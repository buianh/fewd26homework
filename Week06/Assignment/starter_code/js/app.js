//wait for the DOM elements to load before executing
$(document).ready(function () {

//read input city
$('#submit-btn').click(function(){
event.preventDefault();
var city = $('#city-type').val();
city = city.toLowerCase().trim();
//when click update button


//if the answer is austin
if(city == "austin") {
    $('body').css("background-image","url(images/austin.jpg)");
}

//if the answer is la or los angeles
else if(city == "la" || city == "los angeles" ) {
    $('body').css("background-image","url(images/la.jpg)");
}
//if the answer is new york city or new york or nyc or ny
else if(city == "new york city" || city == "new york" || city == "nyc" || city == "ny" ) {
    $('body').css("background-image","url(images/nyc.jpg)");
}
//if the answer is sf or san francisco
else if(city == "sf" || city == "san francisco" ) {
    $('body').css("background-image","url(images/sf.jpg)");
}
//if the answer is sydney
else if(city == "sydney") {
    $('body').css("background-image","url(images/sydney.jpg)");
}
//other, put citipix_skyline
else {
     $('body').css("background-image","url(images/citipix_skyline.jpg)");
}
});
});