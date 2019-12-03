// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("navigation").style.width = "25vw";
        document.getElementById("navigation").style.fontSize = "4vw";
    } else {
        document.getElementById("navigation").style.width = "30vw";
        document.getElementById("navigation").style.fontSize = "5vw";
    }
}


