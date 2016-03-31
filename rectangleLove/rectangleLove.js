/*
A crack team of love scientists from OkEros (a hot new dating site) have
devised a way to represent dating profiles as rectangles on a two-dimensional
plane.

They need help writing an algorithm to find the intersection of two users'
love rectangles. They suspect finding that intersection is the key to a
 matching algorithm so powerful it will cause an immediate acquisition by
 Google or Facebook or Obama or something.

Write a function to find the rectangular intersection of two given love
rectangles.

As with the example above, love rectangles are always "straight" and
never "diagonal." More rigorously: each side is parallel with either the
x-axis or the y-axis.

They are defined as objects like this:

var myRectangle = {

  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,

  // width and height
  width: 10,
  height: 4,

};
*/

function findIntersection(a, b) {
  var xOverlap = findXOverlap(a, b);
  var yOverlap = findYOverlap(a, b);
  if (!xOverlap.width || !yOverlap.width) {
    return 0;
  }

  return {
    leftX: xOverlap.startPoint,
    width: xOverlap.width,
    bottomY: yOverlap.startPoint,
    height: yOverlap.height,
  }
}

function findXOverlap(a, b) {
  var highestStartPoint = Math.max(a.leftX, b.leftX);
  var lowestEndPoint = Math.min(a.leftX + a.width, b.leftX, b.width);
  if (highestStartPoint > lowestEndPoint) {
    return {
      startPoint: null,
      width: null,
    };
  } else {
    return {
      startPoint: highestStartPoint,
      width: lowestEndPoint - highestStartPoint
    };
  }
}

function findYOverlap(a, b) {
  var highestStartPoint = Math.max(a.bottomY, b.bottomY);
  var lowestEndPoint = Math.min(a.bottomY + a.height, b.leftX, b.height);
  if (highestStartPoint > lowestEndPoint) {
    return {
      startPoint: null,
      width: null,
    };
  } else {
    return {
      startPoint: highestStartPoint,
      width: lowestEndPoint - highestStartPoint
    };
  }
}
