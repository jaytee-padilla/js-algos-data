class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // adds node to beginning of queue
  enqueue(val) {
    // create a new node using the value passed into the function
    let newNode = new Node(val);

    // if there are no nodes in the queue, set this node to be the first and last property of the queue
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // set next property of the current "last node" to be the newNode
      this.last.next = newNode;

      // set last property of the queue to be the newNode
      this.last = newNode;
    }

    // increment size of queue
    return ++this.size;
  }

  // removes node from beginning of queue
  dequeue() {
    // if there is no first property, return null
    if(!this.first) return null;

    // store first property in temporary variable
    let temp = this.first;

    // see if the first property's value is the same as the last property's value (aka, check if there is only one node)
    // if so, set the first and last properties to be null
    if(this.first === this.last) {
      this.last = null;
    }

    // if there is more than 1 node, set the first property to be the value of whatever's currently stored in first.next
    this.first = this.first.next;

    // decrement the size of the queue by 1
    this.size--;

    // return the value of what was dequeued
    return temp.value;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(9);
queue.dequeue();
console.log(queue);