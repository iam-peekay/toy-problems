/*
Implement Breadth First Search: https://en.wikipedia.org/wiki/Breadth-first_search
*/

var Queue = function() {
  this.storage = [];
  this.length = 0;
}

Queue.prototype.enqueue = function(val) {
  this.storage.push(val);
  this.length++;
}

Queue.prototype.dequeue = function() {
  var val = this.storage.shift();
  this.length--;
  return val;
}

Queue.prototype.isEmpty = function() {
  return this.length === 0;
}

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}


function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(val) {
  var root = this.root;
  var newNode = new Node(val);
  if(!root) {
    this.root = newNode;
    return;
  }
  var current = root;

  while(current) {
    if (val < current.value) {
      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        current = current.left;
      }
    } else {
      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        current = current.right;
      }
    }
  }
}

var tree = new BinarySearchTree();
tree.push(4);
tree.push(7);
tree.push(7);
tree.push(1);
tree.push(10);

function BFS(tree) {
  // if there is no root, return
  if (tree.root === null) {
    return;
  }
  var queue = new Queue();
  var current = tree.root;
  var n;
  queue.enqueue(current);
  while(!queue.isEmpty()) {
    n = queue.dequeue();
    
    console.log(n.value);

    if (n.left !== null) {
      queue.enqueue(n.left);
    }
    if (n.right !== null) {
      queue.enqueue(n.right);
    }
  }
}
