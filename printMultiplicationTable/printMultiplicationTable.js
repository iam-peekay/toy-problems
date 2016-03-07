// Print out the grade-school multiplication table up to nxn

function multiplicationTable(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push([]);
    for (var j = 0; j < n; j++) {
      result[i][j] = (i+1) * (j+1);
    }
  }
  return result;
}
