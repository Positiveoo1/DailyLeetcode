//350. Intersection of Two Arrays II
var intersect = function(nums1, nums2) {
    let freqMap = {};
    let result = [];

    for(let num of nums1) {
        freqMap[num] = (freqMap[num] || 0) +1;
    }
    for(let num of nums2) { 
        if(freqMap > 0) {
            result.push(num);
            freqMap[num]--;
        }
    }
    return result;
};