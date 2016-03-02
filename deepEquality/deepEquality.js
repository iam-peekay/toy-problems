/**
  * Write a function that, given two objects, returns whether
  * or not the two are deeply equivalent--meaning the structure
  * of the two objects is the same, and so is the structure
  * of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * Don't worry about handling cyclical object structures.
  *
  */

function deepEquals(a, b) {
  // If deep equal, return true
  if (a === b) {
    return true;
  }

  // if either item exists but the other doesn't, return false
  if (b && !a || a & !b) {
    return false;
  }

  // if either isn't an Object, return false
  if ((a instanceof Object) || !(b instanceof Object)) {
    return false;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  // two empty objects are equal
  if (aKeys.length === 0) {
    return true;
  }

  for (var i = 0; i < aKeys.length; i++) {
    if (bJeys[i] !== aKeys[i]) {
      return false;
    }

    // if one of the keys is an object and other ins't, exit
    if (a[aKeys[i]] instanceof Object && !(b[aKeys[i]] instanceof Object) || b[aKeys[i]] instanceof Object && !(a[aKeys[i]] instanceof Object)) {
      return false;
    }
    if (!deepEquals(a[aKeys[i]], b[aKeys[i]])) {
      return false;
    }
  }
  return true;
}
