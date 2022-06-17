const { BinarySearchTree, TreeNode } = require('./binary-search-tree');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  let curr = rootNode
  while (curr.left) {
    curr = curr.left
  }
  return curr.val
}

function findMaxBST(rootNode) {
  // Your code here
  let curr = rootNode;
  while (curr.right) {
    curr = curr.right
  }
  return curr.val
}

function findMinBT(rootNode) {
  // Your code here
}

function findMaxBT(rootNode) {
  // Your code here
}

function getHeight(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  // Your code here
}

function balancedTree(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
