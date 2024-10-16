//1405. Longest Happy String MEDIUM
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const result = [];
    
    const addChar = (counts, chars) => {
        const maxIndex = counts.indexOf(Math.max(...counts));
        const secondIndex = (maxIndex + 1) % 3;
        const thirdIndex = (maxIndex + 2) % 3;

        if (counts[maxIndex] > 0) {
            if (result.length >= 2 && result[result.length - 1] === chars[maxIndex] && result[result.length - 2] === chars[maxIndex]) {
                // If two consecutive letters are already maxIndex char, try adding the next available one
                if (counts[secondIndex] > 0) {
                    result.push(chars[secondIndex]);
                    counts[secondIndex]--;
                } else if (counts[thirdIndex] > 0) {
                    result.push(chars[thirdIndex]);
                    counts[thirdIndex]--;
                } else {
                    return false;
                }
            } else {
                // Add the most frequent character
                result.push(chars[maxIndex]);
                counts[maxIndex]--;
            }
        }
        return counts[maxIndex] > 0 || counts[secondIndex] > 0 || counts[thirdIndex] > 0;
    };

    let counts = [a, b, c];
    const chars = ['a', 'b', 'c'];

    while (true) {
        const canAdd = addChar(counts, chars);
        if (!canAdd) break;
    }

    return result.join('');
};
