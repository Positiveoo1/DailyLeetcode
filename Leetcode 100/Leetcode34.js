//Range
var summaryRanges = function(nums) {
    let ranges = [];
    let start = 0;

    while (start < nums.length) {
        let end = start;

        while (end + 1 < nums.length && nums[end + 1] === nums[end] + 1) {
            end++;
        }

        if (start === end) {
            ranges.push(nums[start].toString());
        } else {
            ranges.push(nums[start] + "->" + nums[end]);
        }

        start = end + 1;
    }

    return ranges;
};