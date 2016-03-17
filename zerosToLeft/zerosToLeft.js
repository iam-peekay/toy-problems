/*
Given an integer array, move all elements containing '0' to the left while maintaining the order of other elements in the array.
*/

function zerosToLeft(array) {
  if (array.length < 1) {
    throw new Error('Please enter a valid array');
  }

  var readIndex = array.length - 1;
  var writeIndex = array.length - 1;
  var currentItemToWrite = array[readIndex];
  while (readIndex >= 0) {
    if (array[readIndex] !== 0) {
      currentItemToWrite = array[readIndex];
      array[writeIndex] = currentItemToWrite;
      writeIndex--;
    }
    readIndex--;
  }

  while(writeIndex >= 0) {
    array[writeIndex] = 0;
    writeIndex--;
  }

  return array;
}
