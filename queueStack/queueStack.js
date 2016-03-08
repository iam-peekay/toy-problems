/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

 function Stack() {
   var storage = [];
   var length = 0;
   this.push = function() {
     storage[length] = arguments[0];
     length++;
   }
   this.pop = function() {
     if (length) {
       var result = storage[length - 1];
       delete storage[length - 1];
       length--;
       return result;
     }
     return undefined;
   }
   this.size = function() {
     return length;
   }
 }

 function Queue() {
   var storage = [];
   var length = 0;
   var inbox = new Stack();
   var outbox = new Stack();
   this.enqueue = function() {
     inbox.push.apply(arguments);
   }

   this.dequeue = function() {
     if (outbox.size() === 0) {
       while(inbox.size() !== 0) {
         outbox.push(inbox.pop());
       }
     }
     return outbox.pop();
   }

   this.size = function() {
     return inbox.size() + outbox.size();
   }
 }
