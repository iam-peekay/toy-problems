/**
 * Write a function `f(a, b)` which takes two strings as arguments and
 * returns a string containing the characters found in both strings
 * (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 * Extra credit: Extend your function to handle more than two
 * input strings.
 *
 */

function commonCharacters(string1, string2) {
  var otherStrings = Array.prototype.slice.call(arguments, 1);
  var common = otherStrings.reduce(function(obj, string) {
    obj = intersection(obj, objectify(string));
    return obj;
  }, objectify(string1));

  return string1.split('').reduce(function(output, char) {
    if (common[char]) {
      output += char;
      common[char] = false;
    }
    return output;
  });
}
// HELPER FUNCTIONS:

// Given two objects, intersection() uses reduce to create
// an object with only the common keys
var intersection = function (set1, set2) {
  return Object.keys(set1).reduce(function (out, val) {
     if (val in set2) { out[val] = true; }
     return out;
  }, {});
};

// Takes a string and makes an object with each alphabetical
// character in the string represented by a key with the
// value 'true'
var objectify = function (string) {
   return string.split('').reduce(function (obj, char) {
     // regex that matches only alphabetical characters of either case
     if (char.match(/[a-z]/i)) { obj[char] = true; }
     return obj;
   }, {});

  };
