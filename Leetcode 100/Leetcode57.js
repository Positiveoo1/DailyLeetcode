//921. Minimum Add to Make Parentheses Valid MEDIUM
var minAddToMakeValid = function(s) {
    const par = ['(',')'];
    let counter1= 0;
    let counter2= 0;
    let sum = 0;
    for(let char of s) {
        if(char === par[0]) {
            counter1++;
    }
    if(char === par[1]) {
        if(counter1 > 0) {
            counter1--
        }else {
            counter2++
        }
    }
    }
    sum += counter1 + counter2;
    return sum;
    
};