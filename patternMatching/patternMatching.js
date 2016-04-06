/*
You are given two strings, pattern & value. The pattern string consissts of
just the letters a & b, describing a pattern within a string. For
example, the string catcatgocatgo matches the pattern aabab. it also matches
patterns like a, ab, and b.

Write a method to determine if value matches pattern.
*/

function findPattern(v, p) {
    if (p.length === 0 || p.length === 1) {
        return v.length === p.length;
    }

    var size = v.length;
    var mainChar = p[0];
    var altChar = mainChar === 'a' ? 'b': 'a';
    var mainCount = countOf(mainChar, p);
    var altCount = p.length - mainCount;
    var firstAlt = p.indexOf(altChar);
    var maxMainSize = Math.floor((v.length - altCount) / mainCount);

    for (var mainSize = 1; mainSize <= maxMainSize; mainSize++) {
        var remainingLength = size - (mainSize * mainCount);
        var first = v.substr(0, mainSize);
        if (altCount === 0 || remainingLength % altCount === 0) {
            var altIndex = firstAlt * mainSize;
            var altSize = altCount === 0 ? 0 : remainingLength / altCount;
            var second = altCount === 0 ? '' : v.substring(altIndex, altSize + altIndex);
            var cand = buildFromPatterm(p, first, second);
            if (cand === v) {
                return true;
            }
        }
    }
    return false;
}

function buildFromPatterm(pattern, main, alt) {
    var first = pattern.charAt(0);
    var substring = '';
    for (var i = 0; i < pattern.length; i++) {
        if (pattern[i] === first) {
            substring += main;
        } else {
            substring += alt;
        }
    }
    return substring;
}


function countOf(char, str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
