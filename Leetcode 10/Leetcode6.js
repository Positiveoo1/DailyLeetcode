var rotate = function(nums, k) {
    k = k % nums.length;

    let part1 = nums.slice(-k); 
    let part2 = nums.slice(0, nums.length - k); 

    nums.splice(0, nums.length, ...part1, ...part2);
};