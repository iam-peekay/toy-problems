/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = [];
};

// Super basic queue
var Queue = function() {
  var storage = [];

  this.push = function(item) {
    storage.push(item);
  };

  this.pop = function() {
    return storage.shift();
  };

  this.length = function() {
    return storage.length;
  }
};


Tree.prototype.BFSelect = function(filter) {
  var queue = new Queue();
  var results = [];
  queue.push({tree: this, depth: 0});
  while (queue.length()) {
    var item = queue.pop();
    var tree = item.tree;
    var depth = item.depth;
    if (filter(tree, depth)) {
      results.push(item);
    }
    for (var i = 0; i < tree.children.length; i++) {
      queue.push({tree: tree.children[i], depth: depth + 1});
    }
  }

  return results;
};


/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instance of Tree)) {
    child = new Tree(child);
  }

  if (!this.descendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('This child is already a child of this tree!');
  }
  return child;
};

/**
  * check to see if the provided tree is already a child of this tree or any of its sub trees
  */
Tree.prototype.isDescendant = function(child){
  if (this.children.indexOf(child) > -1) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].isDescendant(child) {
        return true;
      }
    }
    return false;
  }

};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if (index === -1) {
    throw new Error('child is not an immediate child of this node');
  }

  this.children.splice(index, 1);
};
