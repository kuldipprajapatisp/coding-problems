// Write a JavaScript program Check for Remove duplicate characters while maintaining the order.

function removeDuplicates(strInput) {
    let result = '';
    let seen = new Set();
    for(let i=0; i<strInput.length;i++) {
        let char = strInput[i];
        if(!seen.has(char)) {
            result = result + char;
            seen.add(char);
        }
    }
    return result;
}

console.log(removeDuplicates('aabbcc'));
