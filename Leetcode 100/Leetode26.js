var isSubsequence = function(s, t) {
    let i = 0;  
    let j = 0;  
    
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
        
        if (i === s.length) {
            return true;
        }
    }
    
    return i === s.length;
 };
 