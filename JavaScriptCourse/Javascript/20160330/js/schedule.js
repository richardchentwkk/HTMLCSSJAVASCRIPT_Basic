var timer;
var intervalId;

function init() {
    timer = document.getElementById("timer");
    //window.setTimeout(countDown, 1000);
    /*
		使用setInterval, count down 結束後需要主要clear掉
		window.clearINterval(排程編號, ex: intervalId);
    */
    intervalId = window.setInterval(countDown, 1000);
}

function countDown() {
    timer.innerHTML = timer.innerHTML - 1;
    if (timer.innerHTML > 0) {
        //window.setTimeout(countDown, 1000);
    } else {
        //TO DO ACTION here.
        //Count down finished, transfer to google.
        //document.location = "http://www.google.com/";
        alert("Happy birthday.");
        window.clearInterval(intervalId);
    }
}
