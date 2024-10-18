//414. Third Maximum Number EASY
function thirdMax(nums) {
    let distinctNums = Array.from(new Set(nums));
    
    distinctNums.sort((a, b) => b - a);
    
    if (distinctNums.length >= 3) {
        return distinctNums[2];
    }
    
    return distinctNums[0];
}
