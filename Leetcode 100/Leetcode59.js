//190. Reverse Bits EASY
var reverseBits = function(n) {
    let reversed = 0;

    for (let i = 0; i < 32; i++) {
        let lastBit = n & 1;
        reversed = (reversed << 1) | lastBit;
        n = n >> 1;
    }

    return reversed >>> 0; 
};
