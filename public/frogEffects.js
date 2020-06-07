
function frogChange() {


    //Accesses  the frog-img class object
    var frogImage = document.getElementsByClassName("frog-img");

    //Returns an array so we gotta access it as such (very lame)
    //Then, it'll add the class frogAnimate, which contains animation information from the CSS file
    
    frogImage[0].classList.add('frogAnimate');

}