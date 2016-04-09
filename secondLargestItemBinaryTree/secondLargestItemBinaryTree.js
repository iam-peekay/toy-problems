/*
Write a function to find the 2nd largest element in a binary search tree

Same binary node class:
function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

      10
  7 9    11 12
3  8  9  10    15
*/

function findLargest(root) {
  var current = root.right;
  while(current.right) {
    current = current.right;
  }

  return current.value;
}

function findSecondLargestRecursive(root) {
  if (!root) {
    return null;
  }

  if (root.left && !root.right) {
    return findLargest(root);
  }

  if (root.right && !root.right.right && !root.right.left) {
    return root.value;
  }

  return findSecondLargest(root.right);
}


function findSecondLargestIterative(root) {
  if (!root || !root.right || !root.left) {
    throw new Error('whoops, need at least two nodes');
  }

  var current = root;
  while (current) {
    if (!current.right && current.left) {
      return findLargest(current.left);
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
    current = current.right;
  }
}
