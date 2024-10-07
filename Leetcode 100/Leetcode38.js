//2696. Minimum String Length After Removing Substrings
var minLength = function(s) {
    let prevLength;
    
    do {
        prevLength = s.length;
        s = s.replace(/AB|CD/g, "");
    } while (s.length !== prevLength); 
    return s.length;
};