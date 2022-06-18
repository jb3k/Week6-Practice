function findPeak(matrix) {
    let highest = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] > highest) {
                highest = matrix[i][k];
            }
        }
    }

    return highest;
}

function findStarts(matrix) {
    let starts = [];

    // Top Row
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            starts.push([0, i])
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
        if (matrix[matrix.length - 1][i] == 0) {
            starts.push([matrix.length - 1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length - 1])
        }
    }

    return starts;
}

function findNeighbors(node, matrix) {
    // Don't forget to include diagonal neighbors!!!
    // Your code here

    let neigborsArr = []

    for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
            if (r === 0 && c === 0) continue;

            let row = node[0];
            let col = node[1]
            const currRow = row + r;
            const currCol = col + c;

            if (currRow < 0 || currRow >= matrix.length) continue;
            else if (currCol < 0 || currCol >= matrix[currRow].length) continue;
            else {
                let currHeight = matrix[currRow][currCol]
                if (Math.abs(matrix[row][col] - currHeight) <= 1) {
                    neigborsArr.push([currRow, currCol])
                }
            }
        }
    }
    return neigborsArr

}

function pathTraversal(node, matrix, visited, peak) {
    // Your code here

    //how do i know if i want to do a bfs or dfs?
    let stack = [node];
    visited.add(node.toString());

    while (stack.length) {
        let currNode = stack.pop();
        // const [currRow, currCol] = currNode

        let currRow = currNode[0];
        let currCol = currNode[1];

        if (matrix[currRow][currCol] === peak) return true

        //make sure when you call findNeighbors you use currNode not Node
        let neigborsArr = findNeighbors(currNode, matrix);

        //understand the why and how this breaks down...
        for (let neighbors of neigborsArr) {
            let neighborsStr = neighbors.toString();
            if (!visited.has(neighborsStr)) {
                visited.add(neighborsStr);
                stack.push(neighbors)
            }
        }
    }

    return false


}

function identifyPath(mountain) {

    // Find the peak
    // Find the start

    // Traverse from the starts and try to get to the top
    // for loop for the find starts


}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
const mountain_1 = [
    [1, 0, 1, 1],
    [2, 3, 2, 1],
    [0, 2, 4, 1],
    [3, 2, 3, 1]
];

test_visited = new Set()
console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
