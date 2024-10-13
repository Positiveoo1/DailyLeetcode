//224. Basic Calculator
var calculate = function(s) {
    let stack = [];
    let currentNumber = 0;
    let result = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!isNaN(parseInt(char))) {
            currentNumber = currentNumber * 10 + parseInt(char);
        } else if (char === '+') {
            result += sign * currentNumber;
            sign = 1;
            currentNumber = 0;
        } else if (char === '-') {
            result += sign * currentNumber;
            sign = -1;
            currentNumber = 0;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * currentNumber;
            result *= stack.pop();
            result += stack.pop();
            currentNumber = 0;
        }
    }

    if (currentNumber !== 0) {
        result += sign * currentNumber;
    }

    return result;
};
