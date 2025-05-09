const calculator = (num1, num2, operator) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter the number";
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Check your operator";
  }
};

let result = calculator(5, 7, "+");
console.log(result);

module.exports = calculator;
