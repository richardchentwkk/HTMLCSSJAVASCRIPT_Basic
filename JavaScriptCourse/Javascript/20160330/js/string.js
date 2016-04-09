//Practice string, temp marked.
/*var s = new String("Hel") + "lo";
alert("第三個字元:" + s.charAt(2));
alert("全部小寫:" + s.toLowerCase());
alert("取得 ell:" + s.substring(1, 4));
alert("搜尋字串中是否包含 xyz:" + s.indexOf("xyz"));
alert("搜尋字串中是否包含 llo:" + s.indexOf("llo"));*/

//Value of input.
var value;

function check() {
    value = document.getElementById("content").value;
    if (value.toLowerCase().indexOf("fuck") > -1) {
        alert("不要說髒話");
    }
}


var grades = new Array(3);
//Key-in student grades.
for (var i = 0; i < grades.length; i++) {
    grades[i] = Number(prompt("Enter a grade.", ""));
}

//Caculate average
var sum = 0;
for (var i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
}

var avg = sum / grades.length;
alert(avg);
