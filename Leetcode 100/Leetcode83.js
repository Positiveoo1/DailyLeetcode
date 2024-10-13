//520. Detect Capital EASY
var detectCapitalUse = function(word) { 
    var firstChar = word[0].toLowerCase();
    var rest = word.slice(1);

    return /^[A-Z]*$/.test(word) || /^[a-z]*$/.test(word) || /^[A-Z]{1}[a-z]*$/.test(word);
}