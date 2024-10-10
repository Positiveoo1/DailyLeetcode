
//36. Valid Sudoku MEDIUM
var isValidSudoku = function(board) {
    let rows = new Map();
    let columns = new Map();
    let boxes = new Map();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let currentValue = board[i][j];

            if (currentValue === '.') continue;

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (!rows.has(i)) rows.set(i, new Set());
            if (!columns.has(j)) columns.set(j, new Set());
            if (!boxes.has(boxIndex)) boxes.set(boxIndex, new Set());

            if (rows.get(i).has(currentValue) || columns.get(j).has(currentValue) || boxes.get(boxIndex).has(currentValue)) {
                return false;
            }

            rows.get(i).add(currentValue);
            columns.get(j).add(currentValue);
            boxes.get(boxIndex).add(currentValue);
        }
    }

    return true;
};
