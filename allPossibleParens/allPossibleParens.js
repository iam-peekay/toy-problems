/*

Print all parentheses combinations for a given value n such that
they are balanced.
*/

function printAllParens(n) {
  var output = [];
  printAllParensRecurse(n, 0, 0, output);

  return output;
}

function printAllParensRecurse(n, right, left, output) {
  if (right >= n && left >= n) {
    console.log(output);
  }

  if (left < n) {
    output.push('{');
    printAllParensRecurse(n, right, left + 1, output);
    output.pop();
  }

  if (right < left) {
    output.push('}');
    printAllParensRecurse(n, right + 1, left, output);
    output.pop();
  }
}
