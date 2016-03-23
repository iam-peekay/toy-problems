
var Stack = function() {
  this.storage = [];
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.storage.push(val);
  this.length++;
}

Stack.prototype.pop = function() {
  var val = this.storage.pop();
  this.length--;
  return val;
}

Stack.prototype.peek = function() {
  return this.storage[this.length - 1];
}

Stack.prototype.isEmpty = function() {
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

function DFS(tree) {
  if (tree.root === null) {
    return;
  }

  var current = tree.root;
  var stack = new Stack();
  var n;
  stack.push(current);
  while (!stack.isEmpty()) {
    n = stack.pop();
    if (n.left) {
      stack.push(n.left);
    }

    if (n.right) {
      stack.push(n.right);
    }
  }
}
