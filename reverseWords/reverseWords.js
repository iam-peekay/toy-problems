/*
You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, worried it's a plot
to break into a major European National Cake Vault. The message has been
mostly deciphered, but all the words are backwards! Your colleagues have
handed off the last step to you.

Write a function reverseWords() that takes a string message and reverses
the order of the words in-place.

Since strings in JavaScript are immutable, we'll first convert the string
 into an array of characters, do the in-place word reversal on that array,
 and re-join that array into a string before returning it.
 But keep in mind that this isn't technically "in-place," and the array of
  characters will cost O(n) additional space!
*/

function reverseWords(string) {
  var stringArray = string.split(' ');
  for (var i = 0; i < Math.floor(stringArray.length / 1); i++) {
    var temp = stringArray[i];
    stringArray[i] = stringArray[stringArray.length - 1 - i];
    stringArray[stringArray.length - 1 - i] = temp;
  }
  return stringArray.join(' ');
}
