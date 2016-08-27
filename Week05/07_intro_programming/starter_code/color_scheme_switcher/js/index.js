
document.getElementById('grayButton').onclick = setToGrey;
document.getElementById('whiteButton').onclick = setToWhite;





function setToWhite(){

	//Change the body to white
	document.body.style.backgroundColor = "white";
	//Change the text to black
	document.body.style.color = "black";
}


function setToGrey(){
// Cahnge body to grey

	document.body.style.backgroundColor = "grey";

//Change text to white
	document.body.style.color = "white";
}