//1089. Duplicate Zeros EASY
var duplicateZeros = function(arr) {
    let n = arr.length;
    
    let zeroCount = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }

    let i = n - 1; 
    let j = n + zeroCount - 1;

    while (i >= 0) {
        if (j < n) {
            arr[j] = arr[i]; 
        }

        if (arr[i] === 0) {
            if (j - 1 < n) {
                arr[j - 1] = 0; 
            }
            j--; 
        }

        i--;
        j--;
    }
};