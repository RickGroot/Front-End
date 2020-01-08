// When the user scrolls down 50px from the top of the document, resize the header's font size
var width = document.getElementById('width').offsetWidth;

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (width > 600) {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.getElementById("navigation").style.width = "20vw";
            document.getElementById("navigation").style.fontSize = "3vw";
        } else {
            document.getElementById("navigation").style.width = "25vw";
            document.getElementById("navigation").style.fontSize = "3.5vw";
        }
    }
}




var imagetwo = document.getElementById("clicktwo");
var imagethree = document.getElementById("clickthree");

function fullscreentwo() {
    imagetwo.classList.toggle('twoclicked');
}

function fullscreenthree() {
    imagethree.classList.toggle('threeclicked');
}

imagetwo.addEventListener('click', fullscreentwo);
imagethree.addEventListener('click', fullscreenthree);
