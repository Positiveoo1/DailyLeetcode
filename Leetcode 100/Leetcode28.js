var sortedSquares = function(nums) { 
    let squares = nums.map(num => num * num);
    return squares.sort((a, b) => a - b);
}