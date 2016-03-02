/**
 * Write a function that, given a string, Finds the longest run
 * of identical characters and returns an array containing the
 * start and end indices of that run. If there are two runs
 * of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure
 * it handles large inputs well.
 */

function longestRun(string) {
  var currentCount = 1;
  var currentStart = 0;
  var topCount = 0;
  var topStart = 0;
  var topEnd = 0;
  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      currentCount++;
      if (currentCount > topCount) {
        topCount = currentCount;
        topStart = currentStart;
        topEnd = i;
      }
    } else {
      currentCount = 1;
      currentStart = i;
    }
  }

  return [topStart, topEnd];
}

 var randomStringGenerator = function (len) {
   var text = "";
   var possible = "abcdefghijklmnopqrstuvwxyz";

   for(var i = 0; i < len; i++) {
     text += possible.charAt(Math.floor(Math.random() * possible.length));
   }

   return text;
 };
