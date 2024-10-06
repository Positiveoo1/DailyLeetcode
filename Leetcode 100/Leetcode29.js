var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
       let nums1 = nums[i];
       let nums2 = target - nums1;
       if(map.has(nums2)) {
           return [i, map.get(nums2)]
       }
       map.set(nums1, i);
    }
   };