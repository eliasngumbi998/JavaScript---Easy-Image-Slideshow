var image = new Array("images/pic1.jpg", "images/pic2.jpeg", "images/pic3.jpg", "images/pic4.jpeg", "images/pic5.jpeg");
var count = 0;
var length = image.length - 1;
var interval;
function toggleImage(num){
	
	count = count + num;

	if(count > length){
		count = 0;
	}
	
	if(count < 0){
		count = length;
	}
	
	document.slideshow.src = image[count];
	
	return false;
}

function autoPlay(){
	interval=setInterval("toggleImage(1)", 3000);
	document.getElementById('left').style.display="none";
	document.getElementById('right').style.display="none";
	document.getElementById('stop').style.display="inline";
}

function stop(){
	window.location="index.html";
}
