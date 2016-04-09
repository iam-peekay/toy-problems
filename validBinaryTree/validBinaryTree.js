/*
Write a function to check that a binary tree is a valid binary search tree

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
*/

function validator(node) {
  if (node.right >= node.value && node.left <= node.value) {
    return true;
  }

  return false;
}

function validTree(root) {
  if (!root) {
    return false;
  }

  var current = root;
  var stack = [];
  stack.push({node: root, lowerBound: Infinity, upperBound: Infinity});
  while (stack.length) {
    var lastItem = stack.pop();
    var lastNode = lastItem.node;
    var lowerBound = lastItem.lowerBound;
    var upperBound = lastItem.upperBound;

    if (lastNode.value < lowerBound || lastNode.value > upperBound) {
      return false;
    }

    if (lastNode.left) {
      stack.push({node: lastNode.left, lowerBound: lowerBound, upperBound: lastNode.value});
    }

    if (lastNode.right) {
      stack.push({node: lastNode.right, lowerBound: lastNode.right, upperBound: upperBound});
    }
  }
  return true;
}
