/*
Given coins denominations and total amount, find out the number of ways to make the change.

For example, we have coin denominations 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways:
- 1, 1, 1, 1, 1, 1, 1
- 1, 1, 1, 1, 1, 2
- 1, 1, 1, 2, 2
- 1, 2, 2, 2
- 1, 1, 5
- 2, 5
*/

// To count total number solutions, we can divide all set solutions in two sets.
// 1) Solutions that do not contain mth coin (or Sm).
// 2) Solutions that contain at least one Sm.

function coinChange(amount, denoms) {
  var result = [];
  for (var i = 0; i < amount; i++) {
    result.push(0);
  }
  // Initialize our results array with 1 (there is only 1 way to get 0)
  result[0] = 1;
  var curDenom;
  for (var k = 0; k < denoms.length; k++) {
    // For each denom
    curDenom = denoms[i];
    for (var j = denoms[k]; j <= amount; j++) {
      // We count the number of ways to get to target amount,
      // adding solution that do not use this denom * do use this denom
      result[j] = result[j] + result[j - curDenom];
    }
  }
  return result[amount];
}

// METHOD 2:
function coinChange(amount, denoms, index) {
  if (amount === 0) {
    return 1;
  }

  if (amount < 0) {
    return 0;
  }

  if (amount > 0 && index === denoms.length) {
    return 0;
  }

  return coinChange(amount - denoms[index], denoms, index) +  coinChange(amount, denoms, index + 1);
}
