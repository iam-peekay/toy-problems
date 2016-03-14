/*
  Write a function that returns a boolean telling us whether two
  binary trees are identical.
*/

function areIdentical(treeA, treeB) {
  if (treeA.root === null && treeB === null) {
    return true;
  }

  if (treeA && treeB) {
    return (treeA.data === treeB.data && areIdentical(treeA.left, treeB.left) && areIdentical(treeA.right && treeA.right));
  }

  return false;
}
