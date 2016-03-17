/*
Given an array of integers and a value, determine if there are any three integers in the array that sum equal to the given value.

target = 20;
array = [1, 5, 2, 9, 24, 14, 6, 9, 4, 10];
sorted = [1, 2, 4, 5, 6, 9, 9, 10, 14, 24]
18, 19, 20, 23, 23, 24, 26, 28, 29, 30, 33, 33, 38
*/

// BRUTE FORCE = 3 nested loops. O(n^3)
// More optimized - use Sum Of two to find sum of three
function sumOfThree(array, target) {
  var sortedArray = array.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < array.length; i++) {
    if (sumOfTwo(array, target - array[i], i + 1)) {
      return true;
    }
  }
  return false;
}

function sumOfTwo(array, target, startIndex) {

  for (var i = startIndex, j = array.length - 1; i < j) {
    var currentSum = array[i] + array[j];
    if (currentSum === target) {
      return true;
    }

    if (currentSum < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
