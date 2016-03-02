/*
 * Write a function that accepts a 2-dimensional array
 * (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from
 * the upper left in to the center
 * Please write some form of specs, tests, or assertions for
 * your code, and check as many edge cases as you can think of
 * Example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

 function spiralTraversal(array) {
   var finalOutput = [];
   var startRowIndex = 0;
   var endRowIndex = array.length - 1;
   var startColIndex = 0;
   var endColIndex = array[0].length - 1;

   while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {

     for (var i = startColIndex; i <= endColIndex; i++) {
       finalOutput.push(array[startRowIndex][i]);
     }
     startRowIndex++;

     for (var i = startRowIndex; i <= endRowIndex; i++) {
       finalOutput.push(array[i][endColIndex]);
     }
     endColIndex--;

     if (startRowIndex <= endRowIndex) {
       for (var i = endColIndex; i >= startColIndex; i--) {
         finalOutput.push(array[endRowIndex][i]);
       }
       endRowIndex--;
     }

     if (startColIndex <= endColIndex) {
       for (var i = endRowIndex; i >= startRowIndex; i--) {
          finalOutput.push(array[i][startColIndex]);
       }
       startColIndex++;
     }
   }
   return finalOutput;
 }
