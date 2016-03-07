/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

 function characterFrequency(string) {
   var result = [];
   var storage = {};
   var letter;
   var letters;
   for (var i = 0; i < string.length; i++) {
     letter = string.substr(i, 1);
     storage[letter] = storage[letter] + 1 || 1;
   }
   letters = Object.keys(storage);
   for (var i = 0; i < letters.length; i++) {
     result.push([letters[i], storage[letters[i]]]);
   }

   result.sort(function(a, b) {
     if (a[1] > b[1]) {
       return -1;
     } else if (a[1] < b[1]) {
       return 1;
     } else if (a[0] < b[0]) {
       return -1;
     } else if (a[0] > b[0]) {
       return 1;
     } else {
       return 0;
     }
   })
 }
