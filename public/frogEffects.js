
function frogChange() {


	//Accesses  the frog-img class object
	var frogImage = document.getElementsByClassName("frog-img");

	//Returns an array so we gotta access it as such (very lame)
	//Then, it'll add the class frogAnimate, which contains animation information from the CSS file
	
	frogImage[0].classList.toggle('frogAnimate');
	//frogImage[0].style.setAttribute("animation", "deepFry 8s infinite")
}

function deepFryFrogFactsClick(){
	var imagesTest = ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Rane_fritte_in_Italia_-_Fried_frogs_in_Italy.JPG/800px-Rane_fritte_in_Italia_-_Fried_frogs_in_Italy.JPG"];
	
	var imagesCurrent = document.getElementsByClassName("frog-img");

	for(var x = 0; x < imagesCurrent.length; x++){
		var replaceWith = imagesTest[x] || imagesTest[0];
		var currentImg = imagesCurrent[x];
		currentImg.src = replaceWith;
	}
}

function checkURL(url) {//from https://stackoverflow.com/questions/9714525/javascript-image-url-verify
	return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
var defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Green_and_Golden_Bell_Frog.jpg/1280px-The_Green_and_Golden_Bell_Frog.jpg";
function changeFrog(){
	
	var frogURL = document.getElementById("imageURL");
	if (checkURL(frogURL.value)){
		
		var imagesCurrent = document.getElementsByClassName("frog-img");
		imagesCurrent[0].classList.toggle("frogAnimate");
		
		imagesCurrent[0].src = frogURL.value;
		imagesCurrent[0].style.setAttribute("animation", null);
		
		//imagesCurrent[0].style.setAttribute("animation", "deepFry 8s infinite");
	}
	else{
		imagesCurrent[0].src = defaultImage;
	}
}