var canArrange = function(arr, k) { 
    const half = Math.ceil(arr.length / 2);
    const count = new Array(k).fill(0);

    for (let num of arr) {
        const remainder = ((num % k) +k ) % k;
        count[remainder ]++;
    }
    if(count[0] % 2 !== 0) {
        return false;
    }

    for (let i = 1; i < Math.ceil(k / 2); i++) {
                if (count[i] !== count[k - i]) return false; 
            }
        
            return true;
}
