function getNeighbors(row, col, matrix) {

  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors

  // Your code here
  let neigborsArr = []


  return neigborsArr

}

function countIslands(matrix) {

  let count = 0;
  let visited = new Set();


  return count

}

// Uncomment the lines below for local testing
// const matrix = [
//   [1, 1, 1, 0, 0],
//   [0, 1, 1, 0, 1],
//   [0, 1, 1, 0, 1]
// ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2, 4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
