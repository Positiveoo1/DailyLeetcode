var twoSum = function(numbers, target) {
    let map = new Map(); 
 for(let i = 0; i < numbers.length; i++) {
    let nums1 = numbers[i];
    console.log(nums1)
    let nums2 = target - nums1; 
    if(map.has(nums2)) {
        return [i, map.get(nums2)]
    }
    map.set(nums1, i);
 }

};