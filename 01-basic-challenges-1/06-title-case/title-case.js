// Solution 1 - Using a for loop and keyword
function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let newWords = [];

  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1);
    newWords.push(word);
  }

  return newWords.join(" ");
}

// Solution 2 - Using a for loop and index
function titleCase(str) {
  // Split the string into an array of words
  const words = str.toLowerCase().split(" ");

  // Loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join the array of words into a string and return it
  return words.join(" ");
}

// Solution 3 - Using a regular expression
function titleCase(str) {
  // Replace the first letter of each word with its uppercase equivalent
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

let result = titleCase("selen karakaya");
console.log(result);

module.exports = titleCase;

// Last letter to uppercase
function capitalizeLastLetter(str) {
  str = str.toLowerCase();
  return str.replace(/\w\b/g, (match) => match.toUpperCase());
}

let result2 = capitalizeLastLetter("selen karakaya");
console.log(result2);

// first and last letter uppercase
function capitalizeFirstAndLast(str) {
  let words = str.toLowerCase().split(" ");

  words = words.map((word) => {
    return (
      word[0].toUpperCase() +
      word.slice(1, -1) +
      word[word.length - 1].toUpperCase()
    );
  });

  return words.join(" ");
}

let result3 = capitalizeFirstAndLast("selen karakaya");
console.log(result3);
