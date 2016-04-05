var opacityId;
var fadeElement;
var opacity;

//Fade in.
function fadein(element) {
    fadeElement = element;
    //Initial opacity
    opacity = 0.5;
    fadeElement.style.opacity = "0.5";
    fadeElement.innerHTML = "Fade in.";
    opacityId = window.setInterval(upOpacity, 100);
}

function upOpacity() {
    if (opacity >= 0.901) {
        window.clearInterval(opacityId);
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
    opacityId = window.setInterval(downOpacity, 100);
}

function downOpacity() {
    if (opacity <= 0.501) {
        alert(fadeElement.style.opacity);
        fadeElement.innerHTML = "Fade out done.";
        window.clearInterval(opacityId);
    } else {
        opacity -= 0.1;
        fadeElement.style.opacity = opacity;
    }
}
