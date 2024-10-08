//3274. Check if Two Chessboard Squares Have the Same Color EASY
var checkTwoChessboards = function(coordinate1, coordinate2) {
    const col1 = coordinate1.charCodeAt(0) - 'a'.charCodeAt(0) + 1; 
    const row1 = parseInt(coordinate1[1]); 
    const col2 = coordinate2.charCodeAt(0) - 'a'.charCodeAt(0) + 1; 
    const row2 = parseInt(coordinate2[1]); 

    const color1 = (row1 + col1) % 2; 
    const color2 = (row2 + col2) % 2; 

    return color1 === color2;
};

