var reverseWords = function(s) { 
    let words = s.trim().split(/\s+/);
    let reversedWords = [];

    for(let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    return reversedWords.join(" ");
}