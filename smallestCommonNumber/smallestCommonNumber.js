/*
  Given three integer arrays sorted in ascending order, find the smallest
  number that is common in all three arrays. For example, let's look at the
  below three arrays. Here 6 is the smallest number that's common in all the
  arrays.
*/
function smallestCommonNumber(a, b, c) {
  var index1 = 0;
  var index2 = 0;
  var index3 = 0;
  var minValue = -1;

  while (index1 < a.length && index2 < b.length && index3 < c.length) {
    if (a[index1] === b[index2] && b[index2] === c[index3]) {
      minValue = a[index1];
      break;
    }

    if (a[index1] < b[index2] && a[index1] < c[index3]) {
      index1++;
    } else if (b[index2] < a[index1] && b[index2] < c[index3]) {
      index2++;
    } else {
      index3++;
    }
  }
  return minValue;
}
