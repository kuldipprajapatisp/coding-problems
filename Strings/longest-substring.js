//Write a JavaScript program Longest Substring Without Repeating Characters – Find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(strInput) {
    let charset = new Set();
    let maxLength = 0;
    let start = 0;
    for(let i=0; i<strInput.length; i++) {
        while(charset.has(strInput[i])) {
            charset.delete(strInput[start]);
            start++;
        }
        charset.add(strInput[i]);
        maxLength = Math.max(maxLength, i-start+1)
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring('abcdabcbb'))

