//Write a JavaScript program Find All Substrings – Generate all possible substrings of a given string.

function generateAllSubStrings(strInput) {
    let substrings = [];
    for(let i=0; i<strInput.length; i++) {
        for(let j= i+1; j<= strInput.length; j++) {
            substrings.push(strInput.slice(i, j));
        }
    }
    return substrings;
}
console.log(generateAllSubStrings('abc'))