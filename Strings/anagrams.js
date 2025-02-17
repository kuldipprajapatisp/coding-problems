// Write a JavaScript program Check for Anagram – Given two strings, check if they are anagrams of each other. 

function areAnagrams(strInput1, strInput2) {
    //both string length should be same
    if(strInput1.length !== strInput2.length) {
        return false;
    }
    let str2Arr = strInput2.split('');
    for(let i=0; i<strInput1.length; i++) {
       let char = strInput1[i];
       let index = str2Arr.indexOf(char);
       if(index === -1) {
           return false;
       }
       str2Arr.splice(index, 1);
    }
    return true;
}

console.log(areAnagrams('listen', 'silent'));
