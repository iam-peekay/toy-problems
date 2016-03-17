/*
Given a list of stock prices for n days, find the maximum profit with a single buy/sell activity.

We need to maximize the single buy/sell profit and in case we can't make any profit, we'll try to minimize the loss.
*/

function maxProfit(array) {
  if (array.length < 2 || !array) {
    throw new Error('Please enter a valid array');
  }

  var currentBuy = array[0];
  var globalSell = array[1];
  var globalProfit = globalSell - currentBuy;
  var currentProfit = 0;
  for (var i = 1; i < array.length; i++) {
    var currentProfit = array[i] - currentBuy;
    if (currentProfit > globalProfit) {
      globalSell = array[i];
      globalProfit = currentProfit;
    }

    if (currentBuy > array[i]) {
      currentBuy = array[i];
    }
  }
  return globalProfit;
}
