//349. Intersection of Two Arrays EASY
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    return [...new Set(nums2.filter(num => set1.has(num)))];
};
