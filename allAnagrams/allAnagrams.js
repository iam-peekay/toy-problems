/**
 * Given a single input string, write a function that produces all
 * possible anagrams of a string and outputs them as an array.
 * At first, don't worry about repeated strings.  What time complexity
 * is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
// APPROACH 1

function allAnagrams(string) {
  var uniqOutput = {};

  (function anagram(ana, string) {
    if (string === '') {
      uniqOutput[ana] = 1;
    }

    for (var i = 0; i < string.length; i++) {
      anagram(ana + string[i], string.slice(0, i) + string.slice(i + 1))
    }
  })('', string)

  return Object.keys(uniqOutput);
}


// APPROACH 2
// Time complexity: O(n^2)
function allAnagrams(string) {
  var stringArray = string.split('');
  var anagrams = [];
  var current;
  var rest;
  var restAnagrams;
  var next;

  if (string.length === 1) {
    return [string];
  }

  for (var i = 0; i < string.length; i++) {
    rest = Object.create(stringArray);
    current = rest.splice(i, 1);
    restAnagrams = allAnagrams(rest.join(''))
    for (var j = 0; j < restAnagrams.length; j++) {
      next = current.concat(restAnagrams[j]);
      anagrams.push(next.join(''));
    }
  }

  return anagrams;
}
