/*
  Given N people on MxM grid, find the point that requires the least total distance covered by all the people to meet at that point.
*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  calculateDistance(point) {
    return Math.sqrt((point.x - this.x) * (point.x - this.x) + (point.y - this.y) * (point.y - this.y))
  }

  calculateSumOfDistances(points) {
    var total = 0;
    for (var i = 0; i < points.length; i++) {
      total += this.calculateDistance(points[i]);
    }
    return total;
  }
}

function shortesDistance(m, points) {
  var point = new Point(1, 1);
  var minDistance = point.calculateSumOfDistances(points);
  var currentPoint, currentDistance, finalPoint;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      currentPoint = new Point(i, j);
      currentDistance = currentPoint.calculateSumOfDistances(points);
      if (currentDistance < minDistance) {
        finalPoint = currentPoint;
        minDistance = currentDistance;
      }
    }
  }
  return finalPoint;
}
