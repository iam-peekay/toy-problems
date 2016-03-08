/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';
var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var newTail = this.makeNode(value);
  if (!this.head) {
    this.head = newTail;
  }
  if (this.tail) {
    this.tail.next = newTail;
  }
  this.tail = newTail;
}

LinkedList.prototype.removeHead = function() {
  var currentHead = this.head;
  if (!this.head) {
    return null;
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return currentHead.value;
}

LinkedList.prototype.makeNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
}

LinkedList.prototype.contains = function(value) {
  if (!this.head) {
    return false;
  }
  var current = this.head;
  while(current) {
    if (current.value === value) {
      return true;
      break;
    }
    current = current.next;
  }
  return false;
}
