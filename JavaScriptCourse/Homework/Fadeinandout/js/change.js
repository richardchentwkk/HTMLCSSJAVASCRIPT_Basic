var fadeoutId;
var fadeElement;
var opacity;
var fadeinId;

//Fade in.
function fadein(element) {
    fadeElement = element;
    //Initial opacity
    opacity = 0.5;
    fadeElement.style.opacity = "0.5";
    fadeElement.innerHTML = "Fade in.";
    fadeinId = window.setInterval(upOpacity, 50);
}

function upOpacity() {
    //Clean fade-out interval.
    window.clearInterval(fadeoutId);
    if (opacity >= 0.901) {
        window.clearInterval(fadeinId);
        fadeElement.innerHTML = "Fade in done.";
    } else {
        opacity += 0.1;
        fadeElement.style.opacity = opacity;
    }
}

//Fade out.
function fadeout(element) {
    fadeElement = element;
    //Init
    opacity = 1;
    fadeElement.style.opacity = "1";
    fadeElement.innerHTML = "Fade out.";
    fadeoutId = window.setInterval(downOpacity, 50);
}

function downOpacity() {
    //Clean fade-in interval.
    window.clearInterval(fadeinId);
    if (opacity <= 0.501) {
        fadeElement.innerHTML = "Fade out done.";
        window.clearInterval(fadeoutId);
    } else {
        opacity -= 0.1;
        fadeElement.style.opacity = opacity;
    }
}
