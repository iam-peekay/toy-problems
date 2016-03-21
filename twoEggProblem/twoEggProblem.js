/*
  A building has 100 floors. One of the floors is the highest floor an egg
  can be dropped from without breaking.
  If an egg is dropped from above that floor, it will break. If it is
  dropped from that floor or below, it will be completely undamaged and
  you can drop the egg again.

  Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.
*/
/*
SOLUTION 1:
n + (n−1) + (n−2) + … + 1 = 100
n * (n + 1)/2 = 100;
n = ~14

So we drop the first egg at the 14th floor, then 13th floor, then 12th floor and so on. When the first egg breaks, we know we have to go 14 - x (the number of drops we made) to find the floor it breaks at

SOLUTION 2:
We drop the egg at every 10th floor. Once it breaks, you go up by 2 until the second one breaks. So if it breaks at 90, we go back to 80. Then drop at 82, 84, 86, 88. Whichever once it breaks at, we know that the max floor is the floor right below
*/
