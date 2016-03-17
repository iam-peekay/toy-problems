/*
Given an NxN grid of characters and a dictionary, find all words which can be made from the characters in grid and present in the given dictionary. A word can start and end at any character in the grid. Next character must be adjacent to previous character in any of the directions i.e. up, down, left, right and diagonal. Character at each position in grid can be used only once while making a word.
*/

// Assume we have a pre-existing implementation of dictionary
class Boggle {
  constructor(grid, dictionary) {
    this.grid = grid;
    this.dictionary = dictionary;
    this.state = [];

    for (var i = 0; i < this.grid.length; i++) {
      var temp = [];
      for (var j = 0; j < this.grid.length; j++) {
        temp.push(false);
      }
      this.state.push(temp);
    }
  }

  findAllNeighbors(x, y) {
    var neighbors = [];
    var start_x = Math.max(0, x - 1);
    var start_y = Math.max(0, y - 1);
    var end_x = Math.min(this.grid.length - 1, x + 1);
    var end+y = Math.min(this.grid.length - 1, y + 1);
    for (var i = start_x; i <= end_x; i++) {
      for (j = start_y; j <= end_y; j++) {
        if (i === x && j === y) {
          continue;
        }
        if(this.state[i][j] === false) {
          neighbors.push([i, j]);
        }
      }
    }
    return neighbors;
  }

  findWordsRect(i, j, current, words) {
    if (current.length > 0 && this.dictionary.has(current)) {
      words.add(current);
    }

    var neighbors = this.findAllNeighbors(i, j);
    for (var k = 0; k < neighbors.length; k++) {
      var first = neighbors[k][0];
      var second = neighbors[k][1];
      current += this.grid[first][second];
      this.state[first][second] = true;
      this.findWordsRect(first, second, current, words);
      current = current.substr(0, current.length - 1);
      this.state[first][second] = false;
    }
  }

  findAllWords() {
    var words = new Set([]);
    for (var i = 0; i < this.grid.length; i++) {
      for (var k = 0; k < this.grid.length; k++) {
        this.findWordsRect(i, k, '', words);
      }
    }
    return words;
  }
}
