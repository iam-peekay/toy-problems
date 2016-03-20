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
      // We count the number of ways to get to target amount using this denom
      result[j] = result[j] + result[j - curDenom];
    }
  }
  return result[amount];
}
