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

  pop() {
    // if there are no nodes in the stack return null
    if(!this.top) return null;

    // create a temporary variable to store the top property on the stack
    let temp = this.top;

    // if there is only one Node, set the top and bottom properties to be null
    if(this.top === this.bottom) {
      this.bottom = null;
    }
    
    //if there is more than one node, set the top property to be the next property of temp
    this.top = this.top.next;

    // decrement size of the stack
    this.size--;

    // return the value that was removed from stack
    return temp.value;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(6);
stack.push(9);
stack.pop();
console.log(stack);