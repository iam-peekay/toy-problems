/*
  Imagine a game (like baseball) where a player can score 1,2 or 4 runs. Given a score "n", find the total number of ways score "n" can be reached.
*/

// METHOD 1:
function scoreOptionsRecurse(n, result) {
  // If there isn't a path to this n, return 0
  if (n < 0) {
    return 0;
  }

  // If we've calculated & stored the value previously, return it
  // (memoization)
  if (result[n] > 0) {
    return result[n];
  }

  result[n] = scoreOptionsRecurse(n - 1, result) + scoreOptionsRecurse(n - 2, result) + scoreOptionsRecurse(n - 4, result);

  return result[n];
}

function scoreOptions(n) {
  // return 0 ways if n is less than or equal to 0
  if (n <= 0) {
    return 0;
  }

  var result = {};
  result[0] = 1;
  for (var i = 1; i <= n; i++) {
    result[i] = 0;
  }

  scoreOptionsRecurse(n,result);
  return result[n];
}

// METHOD 2:
function scoreOptions(n) {
  if (n <= 0) {
    return 0;
  }

  var result = [0, 0, 0, 1];
  var curSum;
  for (var i = 1; i <= n; i++) {
    // S(n) = S(n - 1) + S(n - 2) + S(n - 4)
    curSum = result[3] + result[2] + result[0];
    result[0] = result[1];
    result[1] = result[2];
    result[2] = result[3];
    result[3] = curSum;
  }
  return result[3];
}

// NOW, what if the possible scores were 2, 3, 5?
function scoreOptions(n) {
  if (n <= 0) {
    return 0;
  }

  var result = [0, 0, 0, 0, 1];
  var curSum;
  for (var i = 1; i <= n; i++) {
    // S(n) = S(n - 2) + S(n - 3) + S(n - 5)
    curSum = result[3] + result[2] + result[0];
    result[0] = result[1];
    result[1] = result[2];
    result[2] = result[3];
    result[3] = result[4];
    result[4] = curSum;
  }
  return result[4];
}
