/*
  Given an array (list) of intervals as input where each interval has a
  start and end timestamps. Input array is sorted by starting timestamps.
  You are required to merge overlapping intervals and return output array (list).

  Consider below input array. Intervals (1, 5), (3, 7), (4, 6), (6, 8)
  are overlapping so should be merged to one big interval (1, 8). Similarly, intervals (10, 12) and (11, 15) are also overlapping intervals and should
  be merged to (10, 15).
*/

function mergeIntervals(arrays) {
  var finalMergedTimes = [];
  var currentStart = arrays[0][0];
  var currentEnd = arrays[0][1];
  for (var i = 1; i < arrays.length; i++) {
    if (arrays[i][0] <= currentEnd) {
      currentEnd = Math.max(arrays[i][1], currentEnd);
    } else {
      finalMergedTimes.push([currentStart, currentEnd]);
      currentStart = arrays[i][0];
      currentEnd = Math.max(arrays[i][1], currentEnd);
    }
  }

  finalMergedTimes.push([currentStart, currentEnd]);
  return finalMergedTimes;
}
