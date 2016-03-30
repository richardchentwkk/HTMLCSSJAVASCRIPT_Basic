var box;
var clickX;
var clickY;

function init() {
    box = document.getElementById("box");
    box.addEventListener("mousedown", pickup);
}

function pickup(e) {
    clickX = event.offsetX;
    clickY = event.offsetY;
    //Add Listener to watch mouse location

    document.addEventListener("mousemove", move);
    //After pickup, click later should put down.
    box.removeEventListener("mousedown", pickup);
    box.addEventListener("mouseup", putdown);
}

function move(e) {
    box.style.left = (e.clientX - clickX) + "px";
    box.style.top = (e.clientY - clickY) + "px";
}

function putdown() {
    //Remove Listener for watching mouse location.
    document.removeEventListener("mousemove", move);
    //放下過後，若在點擊，應該要拿起來。
    box.removeEventListener("mouseup", putdown);
    box.addEventListener("mousedown", pickup);
}
