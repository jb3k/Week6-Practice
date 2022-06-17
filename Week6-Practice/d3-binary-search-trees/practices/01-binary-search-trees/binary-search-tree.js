// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(root) {
    // Your code here
    this.root = null
  }

  insert(val, currentNode = this.root) {
    let newNode = new TreeNode(val);

    if (!currentNode) {
      this.root = newNode;
      return;
    }

    if (currentNode.val < val) {
      if (!currentNode.right) { currentNode.right = newNode; return }
      this.insert(val, currentNode.right)
    } else {
      if (!currentNode.left) { currentNode.left = newNode; return }
      this.insert(val, currentNode.left)
    }

  }

  search(val) {
    // Your code here

    let currentNode = this.root

    while (currentNode) {
      if (val > currentNode.val) {
        currentNode = currentNode.right
      } else if (val < currentNode.val) {
        currentNode = currentNode.left
      } else {
        return true
      }
    }
    return false



  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here

    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)

  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here


    if (!this.root) return;
    let queue = [this.root]

    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr.val)

      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }

    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    if (!this.root) return;
    let stack = [this.root]

    while (stack.length > 0) {
      let curr = stack.pop();
      console.log(curr.val)

      if (curr.left) {
        stack.push(curr.left)
      }
      if (curr.right) {
        stack.push(curr.right)
      }

    }

  }
}

module.exports = { BinarySearchTree, TreeNode };
