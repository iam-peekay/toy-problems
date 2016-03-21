/*
  Write an efficient program to find the sum of contiguous subarray
  within a one-dimensional array of numbers which has the largest sum.

*/

function largestContiguousSum(array) {
  var maxSoFar = 0;
  var maxEndingHere = 0;
  for (var i = 0; i < array.length; i++) {
    maxEndingHere = maxEndingHere + array[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
}
