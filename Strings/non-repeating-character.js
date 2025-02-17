//Write a JavaScript program that find the first non-repeating character – Find the first character in a string that does not repeat.

function firstNonRepeatCharacter(inputStr) {
    let charCount = {};
    for(let i=0; i<inputStr.length; i++) {
      let char = inputStr[i];
      if(charCount[char]) {
        charCount[char] = charCount[char] + 1
      } else {
        charCount[char] = 1;
      }
    }

    for(let i=0; i<inputStr.length; i++) {
      if(charCount[inputStr[i]] === 1) {
          return inputStr[i];
      }   
    }
    return null;
}

console.log(firstNonRepeatCharacter('aabcc'))