function validSolution(board) {
  let rows = []
  let cols = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }
  let squares = { 22: 0, 25: 0, 28: 0, 52: 0, 55: 0, 58: 0, 82: 0, 85: 0, 88: 0 }
  let colSep = 2;
  for (let i = 0; i < board.length; i++) {
    let sum = 0;
    let rowSep = 2;
    for (let j = 0; j < board.length; j++) {
      sum += board[i][j]
      cols[i] = cols[i] + board[i][j]
      if (j <= rowSep && i <= colSep) {
        squares[String(rowSep) + String(colSep)] += board[i][j]
      }
      if(j === rowSep) rowSep+=3
    }
    if(i === colSep) colSep+=3
    rows.push(sum);
  }
  return rows.concat(Object.values(cols)).concat(Object.values(squares)).every(item => item === 45)
}

//main hint: sum from 1 to 9 is 45

// console.log(validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]))