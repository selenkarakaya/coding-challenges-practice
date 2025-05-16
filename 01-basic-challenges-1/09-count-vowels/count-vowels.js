function countVowels(string) {
  // Declare a variable to store the formatted string
  const str = string.toLowerCase();

  // Declare a variable to store the number of vowels
  let count = 0;

  // Declare a variable to store the vowels
  const vowels = ["a", "e", "i", "u", "o"];

  // Loop through the string
  for (let i of str) {
    for (let j of vowels) {
      // If the current character is a vowel, increment the count
      if (i === j) {
        count++;
      }
    }
  }
  // Return the number of vowels
  return count;
}

function countVowelsInObject(string) {
  // Declare a variable to store the formatted string
  const str = string.toLowerCase();

  // Declare a variable to store the vowels
  let count = {};

  // Declare a vowels
  const vowels = ["a", "e", "i", "u", "o"];

  // Loop through the string
  for (let i of str) {
    for (let j of vowels) {
      // If the current character is a vowel, increment the count
      if (i === j) {
        //count[i] ? (count[i] = count[i] + 1) : (count[i] = 1);

        count[i] = (count[i] || 0) + 1;
      }
    }
  }

  // Return the number of vowels
  return count;
}

console.log(countVowels("stringifye"));
console.log(countVowelsInObject("stringifye"));

module.exports = countVowels;

/*
React object values and keys

const values = Object.values(count);
for (let key in count) {
  console.log(key);
  console.log(count[key]);
}

*/
