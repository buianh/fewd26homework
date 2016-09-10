var myLights = 1;
jQuery(document).ready(function(){
//On click #light_switch
$('#light_switch').on("click", function(){

	//if lights are on, turn off
	if(myLights==1) {
	//set body background css to black
	$('body').css("background","black");
	//set myLights = 0 
	myLights = 0;
}
	//else, turn on
	else {
		//Set body to white
		$('body').css("background","white");
		//myLights 1
		myLights = 1;
}

});

});