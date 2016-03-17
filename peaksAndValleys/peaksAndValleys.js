/*
  In an array of integers, a "peak" is an element which is greater than
  or equal to adjacent integers and a "valley" is an elemnent which is
  less than or equal to the adjacent integers. For example, in the
  array [5, 8, 6, 2, 3, 4, 6], 8 & 6 are peaks and 5 & 2 are valleys.

  Given an array of integers, sort the array into alternating sequence of peaks and valleys.
*/

function peaksAndValleys(array) {
  for (var i = 1; i < array.length; i+= 2) {
    var maxIndex = findMaxIndex(array, i - 1, i, i + 1);
    if (i !== maxIndex) {
      swap(array, i, maxIndex);
    }
  }
  return array;
}

function findMaxIndex(array, a, b, c) {

  var length = array.length;
  var aValue = a < length ? array[a] : -1;
  var bValue = b < length ? array[b] : -1;
  var cValue = c < length ? array[c] : -1;

  if (bValue > aValue && bValue > cValue) {
    return b;
  } else if (cValue > aValue && cValue > bValue) {
    return c;
  } else {
    return a;
  }
}

function swap(array, a, b) {
  var temp = array[b];
  array[b] = array[a];
  array[a] = temp;
}
