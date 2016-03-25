/*
Given an array of words and a length L, format the text such that each
line has exactly L characters and is fully (left and right) justified.
You should pack your words in a greedy approach; that is, pack as many
words as you can in each line. Pad extra spaces ' ' when necessary so
that each line has exactly L characters.

Extra spaces between words should be distributed as evenly as possible.
If the number of spaces on a line do not divide evenly between words,
the empty slots on the left will be assigned more spaces than the slots
on the right.

For the last line of text, it should be left justified and no extra space
is inserted between words.

For example,
Words: ["This", "is", "an", "example", "of", "text", "justification."]
L: 16

Return the formatted lines as:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
*/

function textJustification(words, L) {
  var lines = [];
  var newLine = '';
  var i = 0;
  var currentCount = 0;
  var leftOver = 0;
  var spacesInBetween = 0;
  var spaces = '';
  while (i < words.length) {
    // If we can add more words do current line, add them and increment
    // the character count for current line
    if (currentCount + words[i].length <= L) {
      newLine += words[i];
      newLine += ' ';
      currentCount += words[i].length + 1;
      i++;
    } else {
      // If we exceeded the max character count (L) for current line
      // Calculate the spaces in between each word in current line that
      // need to be added to justify text. Then add these spaces
    	newLine = newLine.split('').splice(0, newLine.length - 1).join('');
      leftOver = L - currentCount;
      spacesInBetween = leftOver / (newLine.split(' ').length - 1);
      if (spacesInBetween % 1 !== 0) {
        spacesInBetween = Math.floor(leftOver / (newLine.split(' ').length - 1));
		      for (var k = 0; k < spacesInBetween; k++) {
            spaces += ' ';
          }
          for (var j = 0; j < newLine.length; j++) {
          	newLine[j] += spaces;
          }
        } else {
          for (var m = 0; m < spacesInBetween; m++) {
            spaces += ' ';
          }
          for (var n = 0; n < newLine.length; n++) {
            newLine[n] += spaces;
          }
        }
        // Push the new updated line to our lines
        lines.push(newLine);
        // reset our variables
        spaces = '';
        newLine = '';
        leftOver = 0;
        spacesInBetween = 0;
        currentCount = 0;
        // if we are at the last word, we don't need to do any more work.
        // Just pus it to the end of the line
        if (i === words.length - 1) {
        	lines.push(words[words.length - 1]);
        	break;
        }
      }
  }
  return lines;
}
