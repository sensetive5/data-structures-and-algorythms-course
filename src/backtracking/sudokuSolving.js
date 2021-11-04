const getBoxId = (rowIdx, colIdx) => {
    const colValue = Math.floor(colIdx / 3);
    const rowValue = Math.floor(rowIdx / 3) * 3;

    return colValue + rowValue;
}

const solveSudoku = board => {
    const boardSize = board.length;

    const boxes = new Array(boardSize);
    const rows = new Array(boardSize);
    const columns = new Array(boardSize);

    for (let i = 0; i < boardSize; i++) {
        boxes[i] = {};
        rows[i] = {};
        columns[i] = {};
    }

    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col] !== '') {
                const cellValue = board[row][col];
                const boxId = getBoxId(row, col);

                boxes[boxId][cellValue] = true;
                rows[row][cellValue] = true;
                columns[col][cellValue] = true;
            }
        }
    }

    solveBacktrack(board, boxes, rows, columns, rowIdx, colIdx);
}

const isValid = (box, rows, cols, num) => {
    if (box[num] || rows[num] || cols[num]) return false
    
    return true
}

const solveBacktrack = (board, boxes, rows, columns, rowIdx, colIdx) => {}
