//2044. Count Number of Maximum Bitwise-OR Subsets HARD
function countMaxOrSubsets(nums) {
    let maxOr = 0;
    let count = 0;

    function backtrack(i, currentOr) {
        if (i === nums.length) {
            if (currentOr > maxOr) {
                maxOr = currentOr;
                count = 1;  
            } else if (currentOr === maxOr) {
                count++; 
            }
            return;
        }

        backtrack(i + 1, currentOr | nums[i]);

        backtrack(i + 1, currentOr);
    }

    backtrack(0, 0);

    return count;
}
