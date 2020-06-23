class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    // push the value parameter into this.values
    this.values.push(value);

    // Bubble the value up to its correct spot:
    // Create a variable called index which is the length of the values property - 1 (grabbing the last element of the this.values array, aka the newly inserted 'value' parameter)
    // Create a variable called parentIndex whose value will be the floor of (index - 1) / 2 (grabbing the parent index of the last element in the this.values array)
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    
    // Keep looping as long as the value of the parentIndex's element is less than the value of the child index (compare the values of the 'parentIndex' and 'index' variables checking for which value is larger)
    // Swap the value of the element at the parentIndex with the value of the element at the child index (if the value of the 'index' variable is larger than the value of 'parentIndex', swap the values' positions, if not, then the bubbling is done)
    // Set the index to be the parentIndex and start over
    while(this.values[index] > this.values[parentIndex]) {
      let temp = this.values[parentIndex];

      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(12);
heap.insert(8);
heap.insert(20);