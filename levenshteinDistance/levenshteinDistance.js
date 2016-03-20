/*
Given two strings, compute the Levenshtein distance between them i.e. the minimum number of edits required to convert one string into the other.

For example, the Levenshtein distance between "kitten" and "sitting" is 3.

The minimum steps required to transform the former into latter are:

kitten → sitten (substitution of "s" for "k")
sitten → sittin (substitution of "i" for "e")
sittin → sitting (insertion of "g" at the end)

Mathematically, the Levenshtein distance between two strings a, b (of length i and j respectively) is given by leva,b (i, j) where

leva,b(i, j) = max(i, j)    if min(i, j) = 0,
                  min( lev a,b(i-1, j) + 1, lev a,b(i, j-1) + 1, lev a,b(i-1, j-1) + cost )   otherwise.

where cost is 0 when a = b and 1 otherwise.
*/
function levenshteinDistance(string1, string2) {
  if (string1 === string2) {
    return 0;
  }

  if (string1.length === 0) {
    return string2.length;
  }

  if (string2.length === 0) {
    return string1.length;
  }

  var matrix = [];
  for (var i = 0; i <= string1.length; i++) {
    matrix.push([]);
    for (var j = 0; j <= string2.length; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      } else if (j === 0) {
        matrix[i][j] = i;
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  var cost;
  for (var k = 1; k <= string1.length; k++) {
    for (var n = 1; n <= string2.length; n++) {
      if (string1[k - 1] === string2[n - 1]) {
        cost = 0;
      } else {
        cost = 1;
      }
      matrix[k][n] = Math.min(matrix[k - 1][n] + 1, matrix[k][n - 1] + 1, matrix[k - 1][n - 1] + cost);
    }
  }
  return matrix[string1.length][string2.length];
}

// MORE OPTIMIZED
function levenshteinDistance2(string1, string2) {
  if (string1 === string2) {
    return 0;
  }

  if (string1.length === 0) {
    return string2.length;
  }

  if (string2.length === 0) {
    return string1.length;
  }

  var row1 = [];
  var row2 = [];
  for (var i = 0; i <= string2.length; i++) {
    row1.push(i);
    row2.push(0);
  }

  var cost;
  for (var k = 0; k < string1.length; k++) {
    row2[0] = k + 1;
    for (var n = 0; n < string2.length; n++) {
      if (string1[k] === string2[n]) {
        cost = 0;
      } else {
        cost = 1;
      }
      row2[n + 1] = Math.min(row2[n] + 1, row1[n + 1] + 1, row1[n] + cost);
    }
    for (var j = 0; j < string2.length; j++) {
      row1[j] = row2[j];
    }
  }
  return row2[string2.length];
}
