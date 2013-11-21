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
  solution = new Board({"n":n});
  rows = solution.rows();
  for (var i = 0 ; i < n ; i++){
    rows[i][i] = 1;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return rows;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  n = 4;
  var board = new Board({"n":n});
  //insert n rooks
  //solution? +1
  //move rooks
  //solution? +1
  //move all ways possible
  console.log(board);
  for (var i = 0 ; i < n ; i++){
    board[0][i] = 1;
    for (var j = 0 ; j < n ; j++){
      board[1][j] = 1;
      for (var k = 0 ; k < n ; k++){
        board[2][k] = 1;
        for (var l = 0 ; l < n ; l++){
          board[3][l] = 1;
          if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()){
            solutionCount++;
            console.log(board);
          }
          board[3][l] = 0;
        }
        board[2][k] = 0;
      }
      board[1][j] = 0;
    }
    board[0][i] = 0;
  }
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
