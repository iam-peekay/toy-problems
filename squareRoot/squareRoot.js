/*
Given a double number, write a function to calculate its square root.
*/

var epsilon = 0.00001;

function findSqaureRoot(num) {
  var low = 0.0;
  var high = num / 2.0 + 1.0;
  while (low < high) {
    var mid = (low + high) / 2;
    var sqr = mid * mid;
    var diff = Math.abs(num - sqr);
    if (diff <= epsilon) {
      return mid;
    }

    if (sqr > num) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return -1;
}
