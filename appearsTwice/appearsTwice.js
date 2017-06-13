/*
  I have a list where every number in the range 1....n appears
  once except for one number which appears twice.
  Write a function for finding the number that appears twice.
*/
// METHOD 1: runtime = O(n) & memory = O(n)
function findDup(list, n) {
  var obj = {};
  var curElement;
  for (var i = 0; i < list.length; i++) {
    curElement = list[i];
    if (obj[curElement]) {
      return curElement;
    } else {
      obj[curElement] = true;
    }
  }
}

// METHOD 2: runtime = O(n) & memory = O(1)
// Using the triangular series theorem
function findDup2(list, n) {
  var triangularSum = ((n * n) + n) * 0.5;
  var listSum = 0;
  for (var i = 0; i < list.length; i++) {
    listSum += list[i];
  }
  return listSum - triangularSum;
}
