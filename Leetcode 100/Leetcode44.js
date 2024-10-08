//219. Contains Duplicate II EASY
var containsNearbyDuplicate = function(nums, k) {
    let set1 = new Set();
   
   for(let i = 0; i < nums.length; i++) {
    if(set1.has(nums[i])) {
        return true;
    }
    set1.add(nums[i]);
      if (set1.size > k) {
            set1.delete(nums[i - k]); 
        }
   }
   return false;
};