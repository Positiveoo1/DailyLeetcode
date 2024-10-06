var minSubarray = function(nums, p) {
let total = 0
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    if(total % p === 0) {
        return i + 1;
    }
} 
}