//Function checks if string is palindrome (reads same forwards and backwards.)

function checkPalindrome(inputString) {
	var reverse = inputString.split('').reverse().join('');
    	if (reverse === inputString) {return true;} 
    	else {return false;}
}