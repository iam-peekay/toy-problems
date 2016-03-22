/*
  Given an array of strings, find and groups all the anagrams

*/

function findAllAnagrams(array) {
  var sortedArray = [];
  var hashMap = {};
  var results = [];
  for (var i = 0; i < array.length; i++) {
    sortedArray.push(array[i].toLowerCase().split('').sort().join(''));
  }

  for (var j = 0; j < sortedArray.length; j++) {
    if (hashMap[sortedArray[j]]) {
      hashMap[sortedArray[j]].push(array[j]);
    } else {
      hashMap[sortedArray[j]] = [array[j]];
    }
  }

  for (var key in hashMap) {
    if (hashMap[key].length > 1) {
      results.push(hashMap[key]);
    }
  }

  return results;
}
