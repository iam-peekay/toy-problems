var stringReverse = function(string, start, end) {
  if (!string ||  string.length < 2) {
    return string;
  }

  var stringArray = string.split('');
  while (start < end) {
    var temp = stringArray[start];
    stringArray[start] = stringArray[end];
    stringArray[end] = temp;
    start++;
    end--;
  }
  return stringArray.join('');
}

var replaceAt = function(word, index, character) {
    return word.substr(0, index) + character + word.substr(index + character.length);
}

var reverseStringInPlace = function(string, start, end) {
    if (!string || string.length < 2) {
        return;
    }
    while (start < end) {
        var temp = string[start];
        string = replaceAt(string, start, string[end]);
        string = replaceAt(string, end, temp);

        start++;
        end--;
    }
    return string;
}


var reverseWords = function(sentence) {
  if (!sentence || sentence.length === 0) {
    return null;
  }
  var stringLength = sentence.length;
  var reversedSentence = reverseStringInPlace(sentence, 0, stringLength - 1);

  var start = 0;
  var end = 0;


  while (true) {
    while (reversedSentence[start] === ' ') {
      start++;
    }

    if (start >= stringLength) {
        break;
    }

    end = start + 1;
    while (end < stringLength && reversedSentence[end] !== ' ') {
        end++;
    }

    reversedSentence = reverseStringInPlace(reversedSentence, start, end - 1);

    start = end;
  }
  return reversedSentence;
}
