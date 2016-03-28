/*
The awards committee had planned to give n research grants this year,
out of a its total yearly budget.

However, the budget was reduced to b dollars. The committee members has
decided to affect the minimal number of highest grants, by applying a
maximum cap c on all grants: every grant that was planned to be higher
than c will now be c dollars.

Help the committee to choose the right value of c that would make the
total sum of grants equal to the new budget.

Given an array of grants g and a new budget b, explain and code an
efficient method to find the cap c. Assume that each grant is unique.

Solution: If we sort the array, we can get linear complexity.
*/

function findCap(g, b) {
  if (g === null || g.length === 0) {
    return 0;
  }
  var gSorted = g.sort(function(a, b) {
     if (a < b) {
       return -1;
     } else if (a > b) {
       return 1;
     }
     return 0;
  });

  var partialSum = [];
  var tempSum = 0;

  // Find partialSum up to each index in sorted array
  for (var i = 0; i < gSorted.length; i++) {
    tempSum += gSorted[i];
    partialSum[i] = tempSum;
  }

  // If the sum of entire array is less than budget, return the largest
  // award amount (i.e. last element in array)
  if (partialSum[gSorted.length - 1] <= b) {
    return gSorted[n - 1];
  }

  // Helper function to find capped sum if current index were the cap
  function cappedSum(i) {
    return partialSum[i - 1] * gSorted[i]*(gSorted.length - i);
  }

  var start = 0;
  var end = gSorted.length - 1;
  var mid, result;

  while (end > start) {
    mid = Math.floor((end + start) * 0.5);
    if (mid > 0) {
      if (cappedSum(mid) > b) {
        if (cappedSum(mid - 1) < b) {
          break;
        } else {
          end = mid - 1;
        }
      } else {
        start = mid + 1;
      }
    }
  }
  result = (b - partialSum[mid - 1]) / (gSorted.length - mid);
  return result;
}
