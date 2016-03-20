/*
  Find an efficient algorithm to find maximum sum of a subsequence in
  an array such that no consecutive elements are part of this subsequence.
  Consider the following examples, the max sums of subsequence with no consecutive elements in below examples are 20 and 9 respectively.
*/

// METHOD 1:
function findMaxSumNonAdjacent(array) {
  if (array.length < 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }

  var results = [];
  var length = array.length;
  results.push(array[0]);
  for (var i = 1; i < length; i++) {
    results[i] = Math.max(results[i - 1], array[i]);
    if (i - 2 >= 0) {
      results[i] = Math.max(results[i], results[i - 2] + array[i]);
    }
  }
  return results[length - 1];
}

// METHOD 2:
function findMaxSumNonAdjacent2(array) {
  if (array.length < 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }

  var previousSum = array[0];
  var currentSum;
  var length = array.length;
  for (var i = 1; i < length; i++) {
    if (i - 2 >= 0) {
      currentSum = Math.max(previousSum, previousSum + array[i]);
      previousSum = currentSum;
    } else {
      currentSum = array[i];
    }
  }
  return currentSum;
}
