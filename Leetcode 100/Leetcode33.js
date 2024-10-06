//1331. Rank Transform of an Array
var arrayRankTransform = function(arr) {
    let sorted = [...arr].sort((a, b) => a - b); 
    let newarr = [];
    let rank = 1;

    let rankMap = {};
    for (let num of sorted) {
        if (!(num in rankMap)) {
            rankMap[num] = rank++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        newarr.push(rankMap[arr[i]]);
    }

    return newarr;
};