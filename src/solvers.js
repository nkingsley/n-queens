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
window.countNRooksSolutions = function(n,board){
  var solutionCount = 0;
  var board = board || new Board({"n":n});
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
  console.log(board.rows());





  // for (var i = 0 ; i < n ; i++){
  //   rows[0][i] = 1;
  //   for (var j = 0 ; j < n ; j++){
  //     rows[1][j] = 1;
  //     for (var k = 0 ; k < n ; k++){
  //       rows[2][k] = 1;
  //       for (var l = 0 ; l < n ; l++){
  //         rows[3][l] = 1;
  //         if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()){
  //           solutionCount++;
  //           console.log(board);
  //         }
  //         rows[3][l] = 0;
  //       }
  //       rows[2][k] = 0;
  //     }
  //     rows[1][j] = 0;
  //   }
  //   rows[0][i] = 0;
  // }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
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
