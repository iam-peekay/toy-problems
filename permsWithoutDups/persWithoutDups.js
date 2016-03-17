/*
Write a method to compute all permutation of a string of unique characters
*/

function findPermsWithoutDups(string) {
  var perms = [];

  if (string === null) {
    return null;
  }

  if (string.length === 1) {
    perms.push(string);
    return perms;
  }

  var firstChar = string.substr(0, 1);
  var remainder = string.substr(1);
  var words = findPermsWithoutDups(remainder);
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j <= words[i].length; j++) {
      var s = insertCharAt(words[i], firstChar, j);
      perms.push(s);
    }
  }
  return perms;
}

function insertCharAt(word, char, index) {
  return word.substr(0, index) + char + word.substr(index);
}
