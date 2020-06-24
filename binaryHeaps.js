class MaxBinaryHeap {
  constructor() {
    this.values = [10, 12, 8, 20, 30, 4];
  }

  insert(value) {
    // push the value parameter into this.values
    this.values.push(value);

    // Bubble the value up to its correct spot:
    // Create a variable called index which is the length of the values property - 1 (grabbing the last element of the this.values array, aka the newly inserted 'value' parameter)
    // Create a variable called parentIndex whose value will be the floor of (index - 1) / 2 (grabbing the parent index of the last element in the this.values array)
    let index = this.values.length - 1;
    
    // Keep looping as long as the value of the parentIndex's element is less than the value of the child index (compare the values of the 'parentIndex' and 'index' variables checking for which value is larger)
    // Swap the value of the element at the parentIndex with the value of the element at the child index (if the value of the 'index' variable is larger than the value of 'parentIndex', swap the values' positions, if not, then the bubbling is done)
    // Set the index to be the parentIndex and start over
    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentValue = this.values[parentIndex];

      // if the newly added value is no longer larger than the parent value it's being compared to, break out of the loop
      // otherwise, keep swapping values and comparing
      if(value <= parentValue) break;

      this.values[parentIndex] = value;
      this.values[index] = parentValue;

      index = parentIndex;
    }
  }

  extractMax() {
    // Swap the first value in the values property with the last one
    // Pop from the values property, so you can return the value at the end
    // Have the new root "sink down"/down heap to the correct spot:

    // Parent index starts at 0 (the root)
    // Find the index of the left child: 2 * index + 1 (make sure the child's not out of bounds)
    // Find the index of the right child: 2 * index + 2 (make sure the child's not out of bounds)
    // If the left or the right child is greater than the element, swap them. If both left and right children are larger, swap the largest child
    // The child index that was swapped now become the new parent index
    // Keep looping and swapping until neither child is larger than the element
    // Return the old root
  }
}

let heap = new MaxBinaryHeap();
heap.insert(77);
heap.insert(2);
console.log(heap)