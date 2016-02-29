/*
 You are given a binary tree in which each node contains an integer value which might be positive or negative. Design an algorithm to count the number of paths that sum to a fiven value.
 The path does not need to start of end at the root or leaf, but it much go downwards (traveling from parent to child node)
*/

// APPROACH #1: BRUTE FORCE
function pathsWithSum(tree, value) {
  if (tree.data === null) {
    return 0;
  }
  // Count paths starting from root
  var pathsFromRoot = pathsWithSumFromNode(root, value, 0);
  var pathsOnLeft = pathsWithSum(root.left, value);
  var pathsOnRight = pathsWithSum(root.right, value);

  return pathsFromRoot + pathsOnLeft + pathsOnRight;
}

function pathsWithSumFromNode(node, value, currentSum) {
  if (node === null) {
    return 0;
  }

  currentSum += node.data;

  var totolPaths = 0;
  if (currentSum === value) {
    totalPaths++;
  }

  totalPaths += pathsWithSumFromNode(node.right, value, currentSum);
  totalPaths += pathsWithSumFromNode(node.left, value, currentSum);

  return totalPaths;
}

// APPROACH #2: OPTIMIZED
function pathsWithSum(tree, value) {
  if (tree.data === null) {
    return 0;
  }
  var pathCount = {};
  incrementHashTable(pathCount, 0, 1);
  return pathsWithSumFromNode(tree, value, 0, pathCount);
}

function pathsWithSumFromNode(node, value, currentSum, pathCount) {
  currentSum += node.data;
  // Adding running sum to hash table
  incrementHashTable(pathCount, currentSum, 1);

  // Count # of paths with sum ending at the current node
  var sum = currentSum - value;
  var totalPaths = pathCount[sum] !== undefined ? pathCount[sum] : 0;

  // Count paths with sum on the left and right
  totalPaths += pathsWithSum(node.left, value, currentSum, pathCount);
  totalPaths += pathsWithSum(node.right, value, currentSum, pathCount);

  incrementHashTable(pathCount, currentSum, -1);
  return totalPaths;
}

function incrementHashTable(pathCount, key, delta) {
  if (pathCount[key]) {
    pathCount[key] = 0;
  }
  pathCount[key] = pathCount[key] + delta;
}
