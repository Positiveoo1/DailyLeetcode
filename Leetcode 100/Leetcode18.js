var lengthOfLastWord = function(s) {
    s = s.trim();
    let lastWord = s.split(" ").pop();
    return lastWord.length;
};

