/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var board = new Board({"n":n});
  for (var i = 0 ; i < n ; i++){
    for (var j = 0 ; j < n ; j++){
        board.togglePiece(i,j);
      if (!board.hasAnyRooksConflicts()){
        break;
      } else {
        board.togglePiece(i,j);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board.rows();
};
window.boardCopy = function(board){
  var rows = board.rows();
  var result = [];
  for (var i = 0 ; i < rows.length ; i++){
    result.push(rows[i].slice());
  }
  return new Board(result);
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = 0;
  var countRooks = function(board,row,col){
    if (row === n){
      solutionCount++;
      return;
      }
    board.togglePiece(row,col);
    if (!board.hasAnyRooksConflicts()){
      for (var column = 0 ; column < n ;column++) {
        countRooks(board,row+1,column);
      }
    }
    board.togglePiece(row,col);
  };
  countRooks(new Board({"n":n}),0,0);
  return solutionCount;
};

window.blockBoard = function (board,row,column){
  var rows = board.rows();
  if (rows[row][column] === 1){
    // console.log("false at: row"+row+"column"+column);
    // console.table(rows);
    return false;
  }
  var n = rows.length;
  var minusRow = row;
  var minusColumn = column;
  var plusRow = row;
  var plusColumn = column;
  for (var i = 0; i < n; i++,minusRow--,minusColumn--,plusRow++,plusColumn++) {
    rows[row][i] = 1;
    rows[i][column] = 1;
     if (minusRow >= 0 && minusColumn >= 0){
       rows[minusRow][minusColumn] = 1;
    }
    if (minusRow >= 0 && plusColumn < n){
       rows[minusRow][plusColumn] = 1;
    }
    if (plusRow < n && minusColumn >= 0){
      rows[plusRow][minusColumn] = 1;
    }
    if (plusRow < n && plusColumn < n){
      rows[plusRow][plusColumn] = 1;
    }
  }
  rows[row][column] = 2;
  console.log("true at: row"+row+"column"+column);
  console.table(rows);
  return true;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = 0;
  var countQueens = function(blockedArea,row,col){
    if (row === n){
      solutionCount++;
      return;
    }
    for (var column = 0 ; column < n ;column++) {
      var copy = boardCopy(blockedArea);
      if (blockBoard(copy,row,column)){
        countQueens(copy,row+1,column);
      }
    }
  };
    countQueens(new Board({"n":n}),0,0);
  return solutionCount;
};
