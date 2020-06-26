class HashTable {
  constructor(size=53) {
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

		// Returns the index of the hashed key
    return total;
	}

	set(key, value) {
		// Hashes the key
		let index = this._hash(key);

		// If the current index of the hash table is empty, create an empty array at that index (i.e. separate chaining)
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		// Store the key/value parameters in an array at the index within the hash table (e.g. [ , , , [[key, value]], , ,])
		// If another key/value pair is assigned the same index when hashed, that key/value pair will be pushed into the parent index (e.g. [ , , , [[key, value], [key, value]], , ,])
		this.keyMap[index].push([key, value]);

		// Stores the key-value pair in the hash table array via separate chaining
	}
}

let hashTable = new HashTable();
hashTable.set("name", "jaytee");
hashTable.set("name", "jaytee");
hashTable.set("Name", "Naaz");
console.log(hashTable);