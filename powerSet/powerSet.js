/*
  write a method to return all subsets of a set
*/

function getSubsets(set) {
  var allSubsets, index;

  function getSubs(set, index, currentSubsets) {
    index = index || 0;

    if (index === set.length) {
        allSubsets = currentSubsets;
        return;
    }
    
    if (index > set.length) {
      return;
    }

    currentSubsets = currentSubsets || [];
    if (index === 0) {
      currentSubsets.push([set[index]]);
      getSubs(set, index + 1, currentSubsets);
    } else {
      item = set[index];
      copy = currentSubsets.slice();
      for (var i = 0; i < copy.length; i++) {
          moreSubsets = [];
          moreSubsets = moreSubsets.concat(copy[i].concat(item));
          currentSubsets = currentSubsets.concat([moreSubsets]);
       }
      getSubs(set, index + 1, currentSubsets);
    }
  }

  getSubs(set);

  return allSubsets;
}
