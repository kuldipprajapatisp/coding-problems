// Write a javascript program where the user will provide a string, and the program will output the count of each repetitive character.

function charOccuranceCount(inputString) {
    let occuranceCountsObj = {}
    for(let i=0; i < inputString.length; i++) {
        let char = inputString[i];
        if(occuranceCountsObj[char]) {
            occuranceCountsObj[char]++;
        } else {
            occuranceCountsObj[char] = 1;
        }
    }
    Object.entries(occuranceCountsObj).forEach(([key, value]) => {
        console.log(`Character '${key}' appears ${value} times`);
    });
}   

charOccuranceCount('apple')