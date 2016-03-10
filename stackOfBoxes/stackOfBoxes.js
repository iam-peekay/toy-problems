/*

You have a stack of n boxes with width wi, height hi
and depth di. The boxes cannot be rotated and can only be stacked on top of one another if each box in the stack
is strictly larger than the boxed above it in width, height,
and depth.

Implement a method to compute the height of the tallest possible stack. The height of a stack is the sum of heights
of each box

*/
var boxes = [
  { height: 10, width: 5, depth: 5 },
  { height: 2, width: 5, depth: 5 },
  { height: 8, width: 3, depth: 2 },
];

// Sort function for ordering boxed from largest to smallest
// by height
function boxComparator(box1, box2) {
  return box2.height - box1.height;
}

// BRUTE FORCE
function createStack(boxesArray) {
  var maxHeight = 0;
  var sortedBoxesByHeight = boxesArray.sort(boxComparator);
  for (var i = 0; i < boxesArray.length; i++) {
    currentHeight = createStackRecursively(boxes, i);
    maxHeight = Math.max(currentHeight, maxHeight);
  }
  return maxHeight;
}


function createStackRecursively(boxes, bottomIndex) {
  var bottomBox = boxes[bottomIndex];
  var maxHeight = 0;
  for (var i = bottomIndex + 1; i < boxes.length; i++) {
    if (boxes[i].height < bottomBox.height && boxes[i].width < bottomBox.width && boxes[i].depth < bottomBox.depth) {
      currentHeight = createStackRecursively(boxes, i);
      maxHeight = Math.max(currentHeight, maxHeight);
    }
  }
  maxHeight = maxHeight + bottomBox.height;
  return maxHeight;
}

// MEMOIZED
function createStackMemo(boxesArray) {
  var maxHeight = 0;
  var memo = {};
  var sortedBoxesByHeight = boxesArray.sort(boxComparator);
  for (var i = 0; i < boxesArray.length; i++) {
    currentHeight = createStackRecursivelyMemo(boxes, i, memo);
    maxHeight = Math.max(currentHeight, maxHeight);
  }
  return maxHeight;
}

function createStackRecursivelyMemo(boxes, bottomIndex, memo) {
  var bottomBox = boxes[bottomIndex];

  if (memo[bottomIndex]) {
    return memo[bottomIndex];
  }

  var maxHeight = 0;
  var current;
  for (var i = bottomIndex + 1; i < boxes.length; i++) {
    if (boxes[i].height < bottomBox.height && boxes[i].width < bottomBox.width && boxes[i].depth < bottomBox.depth) {
      currentHeight = createStackRecursivelyMemo(boxes, i, memo);
      maxHeight = Math.max(currentHeight, maxHeight);
    }
  }
  maxHeight = maxHeight + bottomBox.height;
  memo[bottomIndex] = maxHeight;
  return maxHeight;
}
