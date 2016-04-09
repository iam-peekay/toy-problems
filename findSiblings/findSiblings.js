/*
Given the root to a binary tree where each node has an additional pointer called sibling (or next), connect the sibling pointer to next node in the same level. Last node in each level should point to the first node of next level in the tree.
*/

function findSiblings(root) {
  if (!root || !root.right || !root.left) {
    return;
  }

  var current = root;
  var last = root;
  while (current) {
    if (current.left) {
      last.next = current.left;
      last = current.left;
      if (current.value === root.value) {
        current = last;
      }
    }

    if (current.right) {
      last.next = current.right;
      last = current.right;
      if (current.value === root.value) {
        current = last;
      }
    }
    last.next = null;
    current = current.next;
  }
}
