
function frogChange() {


	//Accesses  the frog-img class object
	var frogImage = document.getElementsByClassName("frog-img");

	//Returns an array so we gotta access it as such (very lame)
	//Then, it'll add the class frogAnimate, which contains animation information from the CSS file
	
	frogImage[0].classList.add('frogAnimate');

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