/*
  Given a string find all substrings that are palindromes.
  aabbbaa
*/

function subStringPalindrome(string) {
  var count = 0;

  function innerRecurse(string, j, k) {
    var countInner = 0;
    while (j >= 0 && k < string.length) {
      if (input[j] !== input[k]) {
        break;
      }
      console.log(input.substr(j, k + 1));
      countInner++;
      j--;
      k++;
    }
    return countInner;
  }

  for (var i = 0; i < string.length; i++) {
    count += innerRecurse(string, i - 1, i + 1);
    count += innerRecurse(string, i, i + 1);
  }

  return count;
}
