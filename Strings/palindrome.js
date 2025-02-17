//Write a JavaScript program that checks if a given string is a palindrome (reads the same forward and backward).

function stringPalindrome(inputStr) {
    let start = 0;
    let end = inputStr.length - 1;

    while(start < end) {
        if(inputStr[start] !== inputStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true
}

console.log(stringPalindrome('121'));