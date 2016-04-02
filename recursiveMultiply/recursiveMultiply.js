/*
    Write a recursive function to multiply two numbers without using
    the * operator or / operator. You can use addition, subtraction and
    bit shifting, but you should minimize the number of those operation.
*/

// Approach 1: iterative
function multiply(a, b) {
  var result = 0;
  var negative = (a < 0 && b > 0) || (a > 0 && b < 0);
  var min = Math.min(Math.abs(a), Math.abs(b));
  var max = min === a ? b : a;
  var halfOfMin = Math.floor(min / 2);
  var minIsOdd = min % 2 === 1;

  for (var i = 0; i < halfOfMin; i++) {
    result += max;
  }

  result += result;

  if (minIsOdd) {
    result += max;
  }

  result = negative ? result *= -1 : result;

  return result;
}



// Approach 2: recursive
function recursiveMultiple(a, b) {
  var min = Math.abs(a) < Math.abs(b) ? Math.abs(a) : Math.abs(b);
  var max = Math.abs(a) < Math.abs(b) ? Math.abs(b) : Math.abs(a);
  var negative = (a < 0 && b > 0) || (a > 0 && b < 0);

  function innerRecurse(min, max) {
    if (min === 0) {
      return 0;
    }

    if (min === 1) {
      return max;
    }

    var half = min >> 1;
    var halfProduct = innerRecurse(half, max);
    if (min % 2 === 0) {
      return halfProduct + halfProduct;
    } else {
      return halfProduct + halfProduct + max;
    }
  }

  var result = innerRecurse(min, max);
  if (negative) {
    result *= -1;
  }
  return result;
}
