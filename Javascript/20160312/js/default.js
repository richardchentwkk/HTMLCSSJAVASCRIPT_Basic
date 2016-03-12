/*
 Number() 將資料強轉成數字型態
*/
var n1 = prompt("Enter a number", "");
var n2 = prompt("Enter a number", "");
n1 = Number(n1);
n2 = Number(n2);
var result = n1 + n2;
alert(result);

//Practice if else
var money = prompt("Money", "");
if (money > 30000) {
    alert("Too large.");
} else {
    alert(money + "here.");
}
