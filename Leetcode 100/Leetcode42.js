//Daily 1963. Minimum Number of Swaps to Make the String Balanced
var minSwaps = function(s) {
    let imbalance = 0;  
  let maxImbalance = 0;  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '[') {
          imbalance--;  
      } else {
          imbalance++;  
      }
      
      
      maxImbalance = Math.max(maxImbalance, imbalance);
  }
  
  return Math.ceil(maxImbalance / 2);
};