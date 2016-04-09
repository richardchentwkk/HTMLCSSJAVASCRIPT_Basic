function init() {
    var hello = document.getElementById("hello");
    /*
	 addEventListener("Event_Name", EventHandler )
	 Event Handler usually is funciton.
    */

    /*	事件發生流程:
		1. 事件發生了, ex: user clicked.
		2. 瀏覽器收集與事件相關的資訊，並製造一個Event Object 用來存放這些資訊。
		   var eventObj = 事件物件;
		3. 呼叫你提供的事件處理器(function), 並將事件物件透過參數傳入。
			事件處理器(eventObj);
		Refer example below,
    */

    var handler = function(e) {
        alert(e.clientX + ":" + e.clientY);
    };

    //Function 匿名函式
    hello.addEventListener("click", handler);

    //older format usage.
    /*hello.onclick = function() {
        alert("Hello.");
    };

    hello.onmouseover = function() {
        hello.style.color = "red";
    }*/
};
