/*
  Implement an algorithm to get the nth i-Fibonacci number.
  In other words, if i is 5, then the sequence is:
  [0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 31]...
*/
// METHOD 1
function iFibonacci(n, i) {
  var solution = [];
  for (var p = 0; p < i; p++) {
    solution.push(0);
  }
  solution[i - 1] = 1;
  var curSum = 0;
  for (var j = 1; j <= n; j++) {
    for (var k = 0; k < i; k++) {
      curSum += solution[k];
    }
    for (var m = 0; m < i - 1; m++) {
      solution[m] = solution[m + 1];
    }
    solution[i - 1] = curSum;
    curSum = 0;
  }
  return solution[i - 1];
}

// METHOD 2
function iFibonacci2(n, i) {
  var solution = [];
  for (var p = 0; p <= i; p++) {
    solution.push(0);
  }
  solution[i] = 1;
  var curSum = 1;
  var previousSum = 0;
  for (var j = 1; j <= n; j++) {
    curSum = curSum + previousSum - solution[0];
    previousSum = curSum;
    solution.push(curSum);
    solution.splice(0, 1);
  }
  return solution[i];
}
