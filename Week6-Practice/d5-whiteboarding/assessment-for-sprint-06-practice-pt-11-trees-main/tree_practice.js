class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Given a tree, find the node with the highest value at each
// level of the tree and return it in an array, with the root at the
// 0th index, and the highest value in the deepest level of the tree
// in the last index.

//        5
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4

// Expected Output -> [ 5, 7, 3, 9, 4 ]

//main problems here are finding each level, 
//then making sure you arent saving the max value;

//helper to the children at each level  

function findMaxEachLevel(root) {
  // Your code here

  if (!root) return null;

  let queue = [root];
  let arr = []

  while (queue.length) {
    let level = queue.length;
    let levelArr = [];

    for (let i = 0; i < level; i++) {
      let curr = queue.shift();

      levelArr.push(curr.value);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right)

    }

    let max = Math.max(...levelArr);
    arr.push(max)


  }
  return arr

}

// Uncomment the code below for local testing.

// // Build a tree for testing

const simpleTree = new TreeNode(4, null, null);
simpleTree.right = new TreeNode(1, null, null);
simpleTree.left = new TreeNode(3, null, null);
simpleTree.left.left = new TreeNode(5, null, null);
simpleTree.right.right = new TreeNode(2, null, null);
simpleTree.left.right = new TreeNode(6, null, null);
simpleTree.right.left = new TreeNode(7, null, null);

// Test the function with the debug tree
console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
