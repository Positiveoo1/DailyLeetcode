//389. Find the Difference EASY
function findTheDifference(s, t) {
    let charCode = 0;

    for (let i = 0; i < s.length; i++) {
        charCode ^= s.charCodeAt(i);
    }
    
    for (let i = 0; i < t.length; i++) {
        charCode ^= t.charCodeAt(i);
    }

    return String.fromCharCode(charCode);
}
