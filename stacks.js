class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val)

    // if there are no nodes in the stack, set the top and bottom properties to be the newly created node
    if(!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // if there is at least one node, create a variable that stores the current top property on the stack
      let temp = this.top;

      // reset the top property to be the newly created node
      this.top = newNode;

      // set the next property on the node to be the previously created variable
      this.top.next = temp;
    }
    
    // increment the size of the stack by 1
    return ++this.size;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(6);
console.log(stack);