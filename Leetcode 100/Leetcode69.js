//217. Contains Duplicate EASY
var containsDuplicate = function(nums) { 
    let set = new Set();
    for(let num of nums) {
        if(set.has(num)) return true;
        set.add(num);
    }
    return false;
}