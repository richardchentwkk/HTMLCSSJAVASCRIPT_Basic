//Input
var num = prompt("Please enter a number!");

if (isNaN(num)) {
    alert("Input is not number, refrest to try again.");
} else {
    subnum = 2;
    var isPrime;
    while (subnum != num) {
        if (num % subnum == 0 && (num % 1 == 0)) {
            isPrime = "This number is prime.";
            break;
        } else {
            subnum++;
            isPrime = "This number is not prime.";
            continue;
        }

    }
    alert(isPrime);
}
