class HashTable {
  constructor(size = 53) {
    // creates a class property called "keyMap" and stores an array with a set amount of slots (in this case, the default size of the array will be 53 slots)
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIM_NUM = 31;

    // The Math.min loops based on the size of key.length at minimum or, at most, 100 iterations
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // this line of code grabs the utf code of the current character and subtracts 96 from the utf code value
      // by subtracting 96, that value of the character is represented by its numerical position within the alphabet (e.g. "a" = 1, "b" =  2, "e" = 5, etc.)
      let value = char.charCodeAt(0) - 96;

      // the PRIM_NUM (prime number) helps lower the possibility of data collision when hashing the data
      total = (total * PRIM_NUM + value) % this.keyMap.length;
    }

    return total;
  }
}

hash("yuh", 20);