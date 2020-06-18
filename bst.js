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
        // check ot see if there is a node to the left
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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(5);
tree.insert(12);
tree.insert(11);
tree.insert(15);
tree.insert(9);
console.log(tree)