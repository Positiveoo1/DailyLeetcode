//128. Longest Consecutive Sequence MEDIUM
var longestConsecutive = function(nums) {
    let set1 = new Set(nums); 
    let longestStreak = 0;

    for (let num of nums) {
        if (!set1.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (set1.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
