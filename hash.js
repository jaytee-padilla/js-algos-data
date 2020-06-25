// hash function FOR STRINGS ONLY
let hash = (key, arrLen) => {
  let total = 0;
  for (let char of key) {
    // this line of code grabs the utf code of the current character and subtracts 96 from the utf code value
    // by subtracting 96, that value of the character is represented by its numerical position within the alphabet (e.g. "a" = 1, "b" =  2, "e" = 5, etc.)
    let value = char.charCodeAt(0) - 96;
    console.log("value: " + value)
    total = (total + value) % arrLen;
    console.log("total: " + total);
  }

  return total;
}

hash("yuh", 20);