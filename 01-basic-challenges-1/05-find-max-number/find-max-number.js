function findMaxNumber(arr) {
  // Declare a variable to store the maximum number. We can initialize it to the first element in the array
  let maxNumber = arr[0];

  // Loop through the array starting at the second element. We start at the second element because we already set the maximum number to the first element
  for (let i of arr) {
    // If the current element is greater than the maximum number, set the maximum number to the current element
    if (i > maxNumber) {
      maxNumber = i;
    }
  }
  // Return the maximum number
  return maxNumber;
}

// solution 2

function findMax(arr) {
  // Math.max() can take any number of arguments, so we can use the spread operator
  return Math.max(...arr);
}

/*
If you pass an array directly to Math.max(arr), JavaScript treats it as a single argument and returns NaN, 
because Math.max() expects individual numbers, not an array.

Math.max(1,2,3,4)

But you have array and you must convert individual numbers!

[1,2,34,56] with spread operator (...) ====>>> (1,2,34,56)

*/

let result = findMaxNumber([3, 65, 2, 78]);
console.log(result);

let solution2 = findMax([3, 65, 2, 78]);
console.log(solution2);
module.exports = findMaxNumber;
