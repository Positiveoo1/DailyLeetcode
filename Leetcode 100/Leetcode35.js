//2022. Convert 1D Array Into 2D Array EASY
var construct2DArray = function(original, m, n) {
    if(m * n !== original.length) {
        return [];
    }
    let arr2d = [];
    for(let i = 0; i < original.length; i += n) {
        arr2d.push(original.slice(i,i + n));
    }
    return arr2d;
};