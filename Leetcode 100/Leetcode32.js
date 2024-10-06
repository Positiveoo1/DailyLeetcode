//20. Valid Parentheses
var isValid = function(s) {
    const chars = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    const stack = [];
    
    for (let char of s) {
        if (chars[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || chars[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};