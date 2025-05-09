function reverseString(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }

  return string;
}

let result = reverseString("karakaya");
console.log(result);
module.exports = reverseString;

function reverseArray(array) {
  let reservedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reservedArray.push(array[i]);
  }

  return reservedArray;
}

let result2 = reverseArray(["karakaya", "selen"]);
console.log(result2);
