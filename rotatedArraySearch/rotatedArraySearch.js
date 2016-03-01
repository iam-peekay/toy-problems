/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find the rotation point? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * Target time complexity: O(log(array.length))
 */

 function rotatedArraySearch(array) {
   var rotationPoint;
   var midPoint = Math.floor(array.length * 0.5);
   var start, end;

   function findRotationRecursively(array, midPoint, start, end) {
     if (array[midPoint] > array[midPoint + 1] && array[midPoint] > array[midPoint -1]) {
       rotationPoint = midPoint;
       return;
     } else if (array[midPoint] < array[midPoint + 1] && array[midPoint] > array[midPoint - 1]) {
       findRotationRecursively(array, Math.floor((end + midPoint) * 0.5), midPoint, end);
     } else {
       findRotationRecursively(array, Math.floor(midPoint * 0.5), start, midPoint);
     }
   }

   findRotationRecursively(array, midPoint, 0, array.length -1);
   return rotationPoint;
 }
