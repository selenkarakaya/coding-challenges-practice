function isPalindrome(str) {
  const string = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = string.split("").reverse().join("");
  return string === reversed;
}

module.exports = isPalindrome;
