//3174. Clear Digits EASY
var clearDigits = function(s) {  
    let stack = [];
    
    for(let char of s) {
        if(/\d/.test(char) ) {
             if (stack.length > 0) {
                stack.pop();  
            }
        }else {
            stack.push(char)
        }
    }
    return stack.join('');
}