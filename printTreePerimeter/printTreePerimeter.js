/*
Given the root node of a binary tree, print nodes forming the boundary (perimeter).
*/

function printLeftPerimeter(root) {
  while (root) {
    var current = root.value;
    if (root.left) {
      root = root.left;
    } else if (root.right) {
      root = root.right;
    } else {
      break; // leaf node
    }
    console.log(current + ' ');
  }
}

function printRightPerimeter(root) {
  var stack = [];
  while (root) {
    var current = root.value;
    if (root.right) {
      root = root.right;
    } else if (root.left) {
      root = root.left;
    } else {
      break; // leaf node
    }
    stack.push(current);
  }

  while (stack.length) {
    console.log(stack.pop() + ' ');
  }
}

function printLeaves(root) {
  if (root) {
    printLeaves(root.left);
    if (!root.left && !root.right) {
      console.log(root.data + ' ');
    }
    printLeaves(root.right);
  }
}

function printPerimeter(root) {
  if (root) {
    console.log(root.data + ' ');
    printLeftPerimeter(root.left);

    if (root.left || root.right) {
      printLeaves(root);
    }

    printRightPerimeter(root.right);
  }
}
