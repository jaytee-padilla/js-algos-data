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

  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(9);
console.log(queue);