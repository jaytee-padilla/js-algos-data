class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert a new node into the BST
  insert(value) {
    // create a new node
    let node = new Node(value);

    // starting at the root,
    // check if there is a root, if not, set the new node as the root
    // if there is a root, check if the value of the new node is greater than or less than the value of the root
    if(this.root === null) {
      this.root = node;
      return this;
    } else {
      let current = this.root;

      while(true) {
        // no duplicates allowed in this tree
        if(value === current.value) return undefined;

        // if it is less,
        // check to see if there is a node to the left
        // if there is, move to that node and repeat these steps
        // if there is not, add the new node as the right property
        if(value < current.value) {
          if(current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        }
        // if it is greater,
        // check to see if there is a node to the right,
        // if there is, move to that node and repeat these steps
        // if there is not, add the new node as the right property
        else if(value > current.value) {
          if(current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    // start at root
    // check if there is a root, if not, search is done
    // if there is a root, check if the value of the new node is the value we are looking for, if found, search is done
    // if not, check to see if the value is greater than or less than the value of the root
    if(this.root === null) return false;

    if(value === this.root.value) {
      return true;
    } else {
      let current = this.root;

      while (true) {
        // if the current value matches the value being searched, a match has been found
        if(value === current.value) return true;

        // if it is less,
        // check to see if there is a node to the left
        // if there is not, search is done
        // if there is, move to that node and repeat these steps
        if(value < current.value) {
          if(current.left === null) {
            return false;
          } else {
            current = current.left;
          }
        }

        // if it is greater,
        // check to see if there is a node to the right
        // if there is not, search is done
        // if there is, move to that node and repeat these steps
        else if(value > current.value) {
          if(current.right === null) {
            return false;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  BFS() {
    // ***** ITERATIVE *****
    // create a queue (will be using an array in this case)
    // create a variable that will store the values of nodes visited
    let queue = [];
    let visited = [];

    // place the root node into the queue
    queue.push(tree.root);

    // Loop as long as there is anything in the queue:
    // Dequeue a node from the queue and push the value of that dequeued node into the variable that stores the value of nodes visited
    // If there is a left property on the node that was dequeued, add the left property's node to the queue
    // If there is a right property on the node that was dequeued, add the right property's node to the queue
    while(queue.length > 0) {
      let current = queue.shift();
      
      visited.push(current.value);

      if(current.left !== null) {
        queue.push(current.left);
      }

      if(current.right !== null) {
        queue.push(current.right);
      }
    }

    // return the array of visited node values
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(5);
tree.insert(12);
tree.insert(11);
tree.insert(15);
tree.insert(9);
console.log(tree.BFS());