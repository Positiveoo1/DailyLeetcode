function convert(s, numRows) {
    if (numRows === 1 ) return s;

    let rows = new Array(Math.min(numRows, s.length)).fill("");
    let curRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        rows[curRow] += s[i];
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join('');  
}
