/*
Given a sorted array of integers, return the low and high index of the given key. Return -1 if not found. The array length can be in millions with lots of duplicates.
*/

function findLowIndex(array, key) {
  var low = 0;
  var high = array.length - 1;
  var midPoint = Math.floor((high + low) * 0.5);
  while (low <= high) {
    if (array[midPoint] >= key) {
      high = midPoint - 1;
    } else {
      low = midPoint + 1;
    }
    midPoint = Math.floor((high + low) * 0.5);
  }
  if (array[low] === key) {
    return low;
  } else {
    return -1;
  }
}

function findHighIndex(array, key) {
  var low = 0;
  var high = array.length - 1;
  var midPoint = Math.floor((high + low) * 0.5);
  while (low <= high) {
    if (array[midPoint] <= key) {
      low = midPoint + 1;
    } else {
      high = midPoint - 1;
    }
    midPoint = Math.floor((high + low) * 0.5);
  }
  if (array[high] === key) {
    return high;
  } else {
    return -1;
  }
}
