//3. Longest Substring Without Repeating Characters Medium
var lengthOfLongestSubstring = function (s) {

    let maxLen = 0;
    let start = 0;
    let charMap = {};

    for (let i = 0; i < s.length; i++) {
        if ( charMap[s[i]] >= start) {
            start = charMap[s[i]] + 1;
        }
        charMap[s[i]] = i;
        maxLen = Math.max(maxLen, i - start +1 );
        
    }

    return maxLen;
};