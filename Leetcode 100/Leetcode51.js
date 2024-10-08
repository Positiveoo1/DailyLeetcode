var addBinary = function(a, b) { 
    let sum = 0;
    let carry = 0;
    let result = '';

    while (a || b || carry) {
        sum = carry + (a ? +a[a.length - 1] : 0) + (b ? +b[b.length - 1] : 0);
        carry = Math.floor(sum / 2);
        result = (sum % 2) + result;
        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }
    return result;
    
}