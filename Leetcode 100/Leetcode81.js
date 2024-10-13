//191. Number of 1 Bits EASY
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
};