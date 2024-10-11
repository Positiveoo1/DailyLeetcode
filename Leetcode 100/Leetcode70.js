//268. Missing Number EASY
var missingNumber = function(nums) {
    const n = nums.length;
    
    const totalSum = (n * (n + 1)) / 2;
    
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    
    return totalSum - actualSum;
};