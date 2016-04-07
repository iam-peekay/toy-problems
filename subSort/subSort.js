/*
  Given an array of integers, write a mehod to find indices m and n
  such that if you sorted elements m through n, the entire
  array would be sorted. Minimize n - m (that is, find the smallest such
  sequence)

  Example:
  INPUT: 1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19
  OUTPUT: [3, 9]
*/

function subSort(array) {
  var leftIndex = 0;
  var rightIndex = array.length - 1;

  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[leftIndex]) {
      leftIndex++;
    } else {
      break;
    }
  }

  for (var i = array.length - 2; i >=0; i--) {
    if (array[i] < array[rightIndex]) {
      rightIndex--;
    } else {
      break;
    }
  }

  while(rightIndex < array.length && leftIndex >= 0) {
    var left = array.slice(0, leftIndex + 1);
    var right = array.slice(rightIndex);
    var mid = array.slice(leftIndex + 1, rightIndex);
    if (!conditionRight(left, mid, right)) {
      rightIndex++;
    } else if (!conditionLeft(left, mid, right)) {
      leftIndex--;
    } else {
      break;
    }
  }
  return [leftIndex + 1, rightIndex - 1];
}

function conditionRight(left, mid, right) {
  if (findMin(right) > findMax(mid)) {
    return true;
  } else {
    return false;
  }
}

function conditionLeft(left, mid, right) {
  if (findMin(mid) > findMax(left)) {
    return true;
  } else {
    return false;
  }
}

function findMin(array) {
	var min = array[0];
	array.forEach(function(item) {
		if (item < min) {
			min = item;
		}
	});

	return min;
}

function findMax(array) {
	var max = array[0];
	array.forEach(function(item) {
		if (item > max) {
			max = item;
		}
	});

	return max;
}
