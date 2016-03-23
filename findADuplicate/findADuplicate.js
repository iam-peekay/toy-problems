/*
We have an array of integers, where:

The integers are in the range 1 ... n
The array has a length of n+1

It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

Write a function which finds any integer that appears more than once in our array.

We're going to run this function on our new, super-hip Macbook Pro With Retina Display. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!
*/

function findDuplicate(array) {
  var floor = 0;
  var ceiling = array.length - 1;
  while (floor < ceiling) {
    var midpoint = Math.floor((floor + ceiling) * 0.5);
    var lowerFloorRange = floor;
    var lowerCeilingRange = midpoint;
    var upperFloorRange = midpoint + 1;
    var upperCeilingRange = ceiling;

    var distinctPossibleIntegersInLowerRange = lowerCeilingRange - lowerFloorRange + 1;
    var itemsInLowerRange = 0;
    array.forEach(function(item) {
      if (item >= lowerFloorRange && item <= lowerCeilingRange) {
        itemsInLowerRange++;
      }
    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      floor = lowerFloorRange;
      ceiling = lowerCeilingRange;
    } else {
      floor = upperFloorRange;
      ceiling = upperCeilingRange;
    }
  }

  return floor;
}
