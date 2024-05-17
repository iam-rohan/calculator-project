const operand1 = null;
const operand2 = null;
const operator = null;

function operate(a, opt, b) {
  if (opt == "+") {
    return a + b;
  } else if (opt == "-") {
    return a - b;
  } else if (opt == "*") {
    return a * b;
  } else if (opt == "/") {
    return a / b;
  } else {
    return "Enter a valid Operator";
  }
}
console.log(operate(5, "+", 2));
console.log(operate(5, "-", 2));
console.log(operate(5, "*", 2));
console.log(operate(5, "/", 2));
