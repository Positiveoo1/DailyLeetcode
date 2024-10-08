var wordPattern = function(pattern, s) { 
    let words = s.split(' '); // Split the string into words
    if (words.length !== pattern.length) return false;

    let charToWord = {}; 
    let wordToChar = {}; 

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        if (charToWord[char] && charToWord[char] !== word) {
            return false;
        }

        if (wordToChar[word] && wordToChar[word] !== char) {
            return false;
        }

        charToWord[char] = word;
        wordToChar[word] = char;
    }

    return true; // If all checks pass
};
