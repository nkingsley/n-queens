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


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = 0;
  var boardStartedAt = [0,0];
  var countRooks = function(board,row,col){
      board.togglePiece(row,col);
    if (!board.hasAnyRooksConflicts()){
      if (row + 1 === n){
        solutionCount++;
        return;
      }
      for (var i = 0 ; i < n ;i++) {
        countRooks(board,row+1,i);
      }
    } else {
      board.togglePiece(row,col);
      return;
    }
  };
  for (var i = 0 ; i < n ; i++){
    for (var j = 0 ; j < n ; j++){
      var board = new Board({"n":n});
      board.togglePiece(i,j);
      boardStartedAt = [i,j];
      countRooks(board,0,0);
    }
  }
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
