// AMAZON 1492. The kth Factor of n  medium
var kthFactor = function(n, k) {
    let factors = [];
     for(let i = 1; i <= n; i++) {
         if(n % i === 0) {
             factors.push(i);
         }
     }
     if(factors.length < k) {
         return -1;
     }
     return factors[k - 1];
 };
 