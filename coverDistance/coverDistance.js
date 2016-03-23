/*
  Given a distance ‘dist, count total number of ways to cover the distance
   with 1, 2 and 3 steps.
*/

// METHOD 1:
function coverDistance(d) {
  if (d === 0) {
    return 1;
  }

  if (d < 0) {
    return 0;
  }

  return coverDistance(d - 1) + coverDistance(d - 2) + coverDistance(d - 3);
}

// METHOD 2: Reduce space complexity significantly
function coverDistance2(d) {
  var count = [];
  count[0] = 1;
  count[1] = 1;
  count[2] = 2;
  if (d < 3) {
    return count[d - 1];
  }
  d -= 2;
  while(d) {
    var temp = count[2];
    count[2] = count[0] + count[1] + count[2];
    count[0] = count[1];
    count[1] = temp;
    d--;
  }

  return count[2];
}
