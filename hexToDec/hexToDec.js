// Convert HEX to DECIMAL (Base 16 to Base 10)

var hexToDecObject= {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15
};

function hexToDec(hex) {
  var hexString = hex.split('');
  var result = 0;
  var length = hexString.length;
  for (var i = length - 1; i >= 0; i--) {
    if (typeof hexString[i] === 'string') {
      hexString[i] = hexString[i].toUpperCase();
    }
    current = hexString[i];
    result += hexToDecObject[current] * Math.pow(16,  length - i - 1);
  }
  return result;
}
