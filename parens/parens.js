/*
 Write an algorithm to print all valid combinations of n pairs of parentheses
*/

// APPROACH 1
function printAllParens(n) {
  var set = new Set();
  if (n === 0) {
    set.add('');
  } else {
    var previous = printAllParens(n - 1);
    for (let item of previous) {
      for (var i = 0; i < item.length; i++) {
        if (item.charAt(i) === '(') {
          var s = insertInside(item, i);
          set.add(a);
        }
      }
      set.add('()' + item);
    }
  }
  return set;
}

function insertInside(str, i) {
  var left = str.substr(0, i + 1);
  var right = str.substr(i + 1, str.length);
  return left + '()' + right;
}
