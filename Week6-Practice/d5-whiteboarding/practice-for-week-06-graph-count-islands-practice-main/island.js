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

  //why do you want to start at negative 1?...
  for (let r = -1; r <= 1; r++) {
    for (let c = -1; c <= 1; c++) {
      //basically the double for loop is looping thru all the combinations of each direction...
      //if the r(ow) or c(ol) is 0, then its a valid node in the matrix... so you want to continue;
      if (r === 0 && c === 0) continue;

      //the reason you want to keep track of this is b/c you want to see if the neighbors of the node are valid nodes in the matrix;
      const currRow = row + r;
      const currCol = col + c;

      //checking edge cases... if row exists, or if column exists...
      //want to check matrix.length b/c if its greater than the length, then its not valid

      if (currRow < 0 || currRow >= matrix.length) continue;
      else if (currCol < 0 || currCol > matrix[currRow].length) continue;
      else {
        //can change depending on what you want to do... in this case we are setting it = to 1 b/c that represents an island
        if (matrix[currRow][currCol] === 1) {
          neigborsArr.push([currRow, currCol])
        }
      }
    }
  }

  return neigborsArr

}

function countIslands(matrix) {


  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
  // If an index contains a 1 and has not been visited, 
  // increment island count and start traversing neighbors
  // DO THE THING (increment island count by 1)
  // Initialize a stack with current index
  // Add stringified version of current index to the visited set
  // While stack contains elements
  // Pop element from stack
  // Get valid neighbors of current element
  // Iterate over neigbors
  // If neighbor has not been visited
  // Add neighbor to stack
  // Mark neighbor as visited
  // Return island count


  let count = 0;
  let visited = new Set();
  //because you arent given any coordinates... you want to do nested for loops
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {

      let node = [row, col]
      if (matrix[node] === 1 && !visited.has(node.toString())) {
        let stack = [node];
        visited.add(node.toString)
        count++;

        while (stack.length) {
          let currNode = stack.pop();

          let currRow = currNode[0];
          let currCol = currNode[1]

          let neigborsArr = getNeighbors(currRow, currCol, matrix)
          for (let neighbors of neigborsArr) {
            if (!visited.has(neighbors.toString())) {
              visited.add(neighbors);
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
const matrix = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1]
]

console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2, 4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
