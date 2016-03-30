var box;

function init() {
    box = document.getElementById("box");
    //box.scrollTop = 50;
    window.setInterval(move, 50);
}

function move() {
    box.scrollTop++;
}
