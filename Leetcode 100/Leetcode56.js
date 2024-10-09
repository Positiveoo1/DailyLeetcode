//345. Reverse Vowels of a String EASY
var reverseVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let strArray = s.split("");
    let left = 0;
    let right = strArray.length - 1;

    while (left < right) {
        if (!vowels.has(strArray[left])) {
            left++;
            continue;
        }
        if (!vowels.has(strArray[right])) {
            right--;
            continue;
        }
        [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
        left++;
        right--;
    }

    return strArray.join("");
};

