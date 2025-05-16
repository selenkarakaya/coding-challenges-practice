const countVowels = require("./count-vowels");

test("Count vowels in a string", () => {
  expect(countVowels("Hello, world!")).toBe(3);
  expect(countVowels("Hello, hello and hello!")).toBe(7);
  expect(countVowels("OpenAI Chatbot")).toBe(6);
  expect(countVowels("Coding Challenge")).toBe(5);
});
