// solution 1

const removeDuplicates = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

// Solution 2

const removeDuplicates2 = (array) => {
  return [...new Set(array)];
};

const result = removeDuplicates([
  1,
  2,
  3,
  4,
  5,
  5,
  5,
  6,
  7,
  8,
  "hello",
  "hello",
  true,
  true,
]);
const result2 = removeDuplicates2([1, 2, 3, "hello", "hello", true, true]);
console.log(result);
console.log(result2);

/*
  ✔️ Explanation:
  The Set object only stores unique values — duplicates are automatically removed.
  
  The ... (spread operator) is used to convert the Set back into an array.
  
  
  
  
  */
module.exports = removeDuplicates;
