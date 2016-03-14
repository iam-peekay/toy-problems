/*
  Implement Quick sort:
  - The divide-and-conquer strategy is used in quicksort. Below the recursion step is described:
    - Choose a pivot value. We take the value of the middle element
    as pivot value, but it can be any value, which is in range of
    sorted values, even if it doesn't present in the array.
    - Partition. Rearrange elements in such a way, that all elements which are lesser than the pivot go to the left part of the array
    and all elements greater than the pivot, go to the right part of
    the array. Values equal to the pivot can stay in any part of the array. Notice, that array may be divided in non-equal parts.
    - Sort both parts. Apply quicksort algorithm recursively to the
    left and the right parts.

*/

function quickSort(array, low, high) {
  // At first round, assume we aren't given the low and high values
  if(typeof low !== 'number') {
    low = 0;
  }

  if(typeof high !== 'number') {
    high = array.length - 1;
  }

  var pivotIndex = null;
  if (low < high) {
    // Set pivot index to be midpoint (can be anything)
    pivotIndex = Math.ceil((high - low) * 0.5) + low;
    // Calc the new pivot by moving everything lower than
    // current pivot to left of it and everything higher
    // than current pivot to right of it
    newPivot = partition(array, pivotIndex, low, high);
    // Repeat for the sub array to left and right of new pivot
    quickSort(array, low, newPivot - 1);
    quickSort(array, newPivot + 1, high);
  }
}

// Utility function to swap values in an array
function swap(array, indexA, indexB) {
    var temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

function partition(array, pivot, low, high) {
  // Start our new pivot point from the low index
  var storeIndex = low;
  var pivotValue = array[pivot];
  // put our pivot value at the right end
  swap(array, pivot, high);
  // For each value lower than current pivot value,
  // put it to the left of the current pivot point
  // and increment current pivot point by 1
  for (var j = low; j < high; j++) {
    if (array[j] < pivotValue) {
      swap(array, j, storeIndex);
      storeIndex++;
    }
  }
  // Put our pivot value in the right place
  swap(array, high, storeIndex);
  return storeIndex;
}
