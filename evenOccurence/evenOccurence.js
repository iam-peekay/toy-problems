/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

function evenOccurence(array) {
  var index;
  var hash = {};
  var length = array.length;
  var current;
  for (var i = 0; i < length; i++) {
    current = array[i];
    hash[current] = hash[current] + 1 || 1;
  }
  for (var i = 0; i < length; i++) {
      if (hash[array[i]] % 2 === 0) {
          return array[i]
      }
  }
  return null;
}
