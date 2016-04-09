function checkPrime(){
	var num = prompt("Please enter a number!");

	if (isNaN(num)) {
		alert("Input is not number, refrest to try again.");
	}else if ( Number(num) <=1 ){
		alert("Please input number bigger than 1.");
	} else {
		subnum = 1;
		var isPrime = "";
		while (subnum != num) {
			//Can div by other num.
			if (num % subnum == 0 && subnum!= 1) {
				isPrime = "This number is not prime.";
				break;
			//Can not div by other num.
			} else {
				subnum++;
				continue;
			}
		}
		/*Alert result.*/
		if(isPrime.length > 1){
			alert(isPrime);
		}else{
			alert("This number is prime.");
		}
	}
}

checkPrime();
