/*
 You are given an array-like data structure Listy which lacks a size method.
 It does however have an "elementAt(i)" method that returns the element at
 index i in O(1) time. If i is beyond the bounds of the data structure, it
 returns -1. For this reason, the data structure only supports positive integers.
 Given an Listy which contains sorted, positive integers, find the index
 at which the element x occures. If x occurs multiple times, you
 may return any index
*/

function search(Listy, value) {
  // Since we dont' know the lenght, to do binary search, we should
  // find the lower index we can use to begin binary search with
  var index = 1;
  while (Listy.elementAt(index) !== -1 && Listy.elementAt(index) < value) {
    index = index *= 2;
  }
  return binarySearchListy(Listy, value, index / 2, index);
}

function binarySearchListy(Listy, value, low, high) {
  var mid;
  while (low <= high) {
    mid = (low + high) * 0.5;
    var middleInt = Listy.elementAt(mid);
    if (middleInt > value || middleInt === -1) {
      high = mid - 1;
    } else if (middleInt < value) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
