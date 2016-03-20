/*

In England the currency is made up of pound, £, and pence, p,
and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

function makeChange(target) {
  var output;
  var denoms = [200, 100, 50, 20, 10, 5, 1];
  var totalWays = 0 ;
  var length = denoms.length - 1;
  function innerRecurse(denoms, index, target) {
    if (index === denoms.length - 1) {
      return 1;
    }

    var denomAmount = denoms[index];
    var amountRemaining;
    for (var i = 0; i * denomAmount <= target; i++) {
      amountRemaining = target - (i * denomAmount);
      totalWays += innerRecurse(denoms, index + 1, amountRemaining);
    }
    return totalWays;
  }
  return innerRecurse(denoms, 0, target)
}

// METHOD # 2
function makeChange(n) {
  var output;
  var denoms = [1, 2, 5, 10, 20, 50, 100, 200];

  (function innerRecurse(index, total) {
    var currentDenom = denom[index];
    if (index === 0) {
      total % currentDemon === 0 && output++;
      return;
    }
    while (total >= 0) {
      innerRecurse(index - 1, total);
      total -= currentDenom;
    }

  })(demons.length - 1, n);
  return output;
}
