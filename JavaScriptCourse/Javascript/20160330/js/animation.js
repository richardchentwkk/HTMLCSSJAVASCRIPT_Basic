var box;
var x, y;
var animationRightId;
var animationDownId;

function init() {
    box = document.getElementById("box");
    x = 100;
    y = box.style.top + 100;
    box.style.left = x + "px";
    animationRightId = window.setInterval(moveRight, 5);
}

function moveRight() {
    x++;
    box.style.left = x + "px";
    if (x >= 600) {
        window.clearInterval(animationRightId);
        animationDownId = window.setInterval(moveDown, 5);
    }

}

function moveDown() {
    y++;
    box.style.top = y + "px";
}
