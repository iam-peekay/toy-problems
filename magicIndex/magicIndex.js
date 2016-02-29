/*
A magic index in an array A[1, 2, ... n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A. Assume the values are NOT distint
*/

// APPROACH #1: BRUTE FORCE
function findMagicIndex(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === i) {
      return index;
    }
  }
  return -1;
}

// APPROACH #2: SINCE IT'S SORTED, WE SHOULD TAKE ADVANTAGE OF THIS
function findMagicIndex(array) {

  function findMagic(array, start, end) {
    if (end < start) {
      return -1;
    }

    var midIndex = Math.floor((start + end) / 2);
    if (array[midIndex] === midIndex) {
      return midIndex;
    }

    var leftIndex = Math.min(midIndex - 1, array[midIndex]);
    var left = findMagic(array, start, leftIndex);
    if (left > 0) {
      return left;
    }

    var rightIndex = Math.max(midIndex + 1, midValue);
    var right = findMagic(array, rightIndex, end);
    return right;
  }

  return findMagic(array, 0, array.length - 1);
}
