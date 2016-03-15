/*
Given a set of n elements find their kth permutation. Consider the following set of elements:
NUMBER:
1
2
3
All permutations of the above elements are (with ordering):

1st - 123
2nd - 132
3rd - 213
4th - 231
5th - 312
6th - 321

*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function findKthPermuatin(v, k, result) {
  if (v || v.length === 0) {
    return;
  }

  let n = v.length;
  let count = factorial(n - 1);
  let selected = Math.floor((k - 1) / count);
  result[0] += v[selected];
  v.splice(selected, 1);
  k = k - (count * selected);

  findKthPermuatin(v, k, result);
}
