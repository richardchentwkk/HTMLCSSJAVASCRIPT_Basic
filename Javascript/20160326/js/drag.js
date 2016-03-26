var box;

function init() {
    box = document.getElementById("box");
    box.addEventListener("click", pickup);
}

function pickup() {
    //Add Listener to watch mouse location
    document.addEventListener("mousemove", move);
    //After pickup, click later should put down.
    box.removeEventListener("click", pickup);
    box.addEventListener("click", putdown);
}

function move(e) {
    box.style.left = (e.clientX - 20) + "px";
    box.style.top = (e.clientY - 20) + "px";
}

function putdown() {
    //Remove Listener for watching mouse location.
    document.removeEventListener("mousemove", move);
    //放下過後，若在點擊，應該要拿起來。
    box.removeEventListener("click", putdown);
    box.addEventListener("click", pickup);
}
