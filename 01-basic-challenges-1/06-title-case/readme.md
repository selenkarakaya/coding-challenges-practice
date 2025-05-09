# Challenge: Title Case

## Instructions

Write a function called `titleCase` that takes in a string and returns the string with the first letter of each word capitalized.

### Function Signature

```js
/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function titleCase(str: string): string;
```

### Examples

```js
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt"); // Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // Here Is My Handle Here Is My Spout
```

## Explanation for solution 3

In this example, we are using the replace method to find the first letter of each word and replace it with the uppercase version of itself.

The regex `/\b\w/g` matches the first letter of each word.

- `\b` matches the word boundary
- `\w` matches the first letter of each word
- The `g` flag is used to replace all occurrences of the regex in the string

The second argument is a callback function that returns the uppercase version of the matched letter.
