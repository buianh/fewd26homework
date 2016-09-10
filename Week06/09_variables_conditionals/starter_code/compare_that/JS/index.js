
//On Page Load/Ready

jQuery(document).ready(function(){
//On click submit
$('#submit').on("click", function(){


//Get value of A and B
var a = parseFloat(jQuery("#a").val());

var b = parseFloat(jQuery("#b").val());
if(a > b) {
	$('#comparison').text('>');
}

else if(a < b) {
	$('#comparison').text('<');
}

else if(a == b) {
	$('#comparison').text('==');
}

else {
	$('#comparison').text('N/A');
}
});

});