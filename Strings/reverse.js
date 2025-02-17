// Write a javascript program where Given a string, reverse it without using built-in functions.

function reverseString(inputStr) {
    let strReverse = '';
    for(let i=inputStr.length - 1; i>=0; i--) {
        strReverse = strReverse + inputStr[i];
    }
    return strReverse
}

console.log(reverseString('Apple'))