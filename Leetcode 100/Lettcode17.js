var intToRoman = function(num) {
    const intRoman = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX',
        10: 'X', 40: 'XL', 50: 'L', 90: 'XC',
        100: 'C', 400: 'CD', 500: 'D', 900: 'CM',
        1000: 'M'     
    }

    let total = 0;
    for (let i = Object.keys(intRoman).reverse().shift(); i <= num; i *= 10) {
        total += Math.floor(num / i);
        num %= i;
    }
    
    return Object.values(intRoman).reduce((result, roman, value) => {
        return result + roman.repeat(Math.floor(total / value));
    }, '');}
};