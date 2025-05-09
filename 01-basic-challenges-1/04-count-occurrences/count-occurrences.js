// 1- Count how many times the specified character is repeated

function countOccurrences(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }

  return count;
}

let result = countOccurrences("selen", "e");
console.log(result);
// Solution 2
// const countOccurrences = (str, char) => str.split(char).length - 1; // Split the string on the character and return the length of the resulting array minus 1

module.exports = countOccurrences;

// 2- Count how many times each character is repeated.

const countOccurrences2 = (string) => {
  const frequency = {};

  for (let char of string) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
};

let result2 = countOccurrences2("selen");
console.log(result2);

// 3- Count only the characters that are repeated (a character counts as 1 if it appears at least twice)

const countOccurrences3 = (string) => {
  const frequency = {};
  const repeated = {};

  for (let char of string) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let key in frequency) {
    if (frequency[key] >= 2) {
      repeated[key] = frequency[key];
    }
  }

  return repeated;
};

let result3 = countOccurrences3("selen");
console.log(result3);
