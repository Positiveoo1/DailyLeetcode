//172. Factorial Trailing Zeroes MEDIUM
var trailingZeroes = function(n) { 
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}