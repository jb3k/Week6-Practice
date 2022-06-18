function getNeighbors(row, col, matrix) {

  // Your code here
  let neigborsArr = []

  for (let r = -1; r <= 1; r++) {
    for (let c = -1; c <= 1; c++) {

      if (r === 0 && c === 0) continue;

      const currRow = row + r;
      const currCol = col + c;

      if (currRow < 0 || currRow >= matrix.length) continue;
      else if (currCol < 0 || currCol >= matrix[currRow].length) continue;
      else {
        if (matrix[currRow][currCol] === 1) {
          neigborsArr.push([currRow, currCol])
        }
      }
    }
  }
  return neigborsArr

}

function countIslands(matrix) {

  let count = 0;
  let visited = new Set();

  //find the nodes of the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      //have a point in the matrix to compare to the Set
      let node = [row, col].toString();

      if (matrix[row][col] === 1 && !visited.has(node)) {
        count++;

        //why does this visited.add need to be inside the if statement?
        visited.add(node)
        let stack = [[row, col]]

        while (stack.length) {
          let currNode = stack.pop();

          let currRow = currNode[0];
          let currCol = currNode[1];

          let neigborsArr = getNeighbors(currRow, currCol, matrix)
          for (let neighbors of neigborsArr) {
            let neighborsStr = neighbors.toString()
            if (!visited.has(neighborsStr)) {
              visited.add(neighborsStr);
              stack.push(neighbors)
            }
          }
        }
      }
    }
  }
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
