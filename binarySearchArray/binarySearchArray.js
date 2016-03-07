/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

 function binarySearch(array, element) {
   function innerRecurse(low, high) {
     var mid = Math.floor((low + high) * 0.5);
     if (element === array[mid]) {
       return element;
     }
     if (element < array[mid]) {
       return innerRecurse(low, mid);
     } else {
       return innerRecurse(mid, high);
     }
   }

   innerRecurse(0, array.length - 1);
 }
