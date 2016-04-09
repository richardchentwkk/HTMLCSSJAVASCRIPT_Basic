/**
 Caculate method
*/
var n1 = Number(prompt("Enter a number", ""));
var n2 = Number(prompt("Enter a number", ""));
var op = prompt("Operation on +, - *, /", "");
var result;

/*Before switch case, check variable type.*/
var n = Number("abc");

if (isNaN(n)) {
    window.alert("Is not number.");
}

//Write content to web.
document.write(5 + 6);

switch (op) {
    case "+":
        result = n1 + n2;
        break;
    case "-":
        result = n1 - n2;
        break;
    case "*":
        result = n1 * n2;
        break;
    case "/":
        result = n1 / n2;
        break;
    default:
        result = "Input wrong"
        break;
};
alert(result);
