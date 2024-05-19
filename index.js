let operand1 = null;
let operand2 = null;
let operator = null;
let display = document.querySelector(".display");

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

function operate(a, opt, b) {
  if (opt == "+") {
    return add(a, b);
  } else if (opt == "-") {
    return sub(a, b);
  } else if (opt == "*") {
    return mul(a, b);
  } else if (opt == "/") {
    return div(a, b);
  } else {
    return "Error";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    if (button.classList.contains("number")) {
      handleNumberButtonClick(event);
    } else if (button.classList.contains("operation")) {
      handleOperationButtonClick(event);
    } else if (button.id === "equals") {
      handleEqualsButtonClick(event);
    } else if (button.id === "clear") {
      handleClearButtonClick(event);
    }
  });
});

function handleNumberButtonClick(event) {
  const value = event.target.textContent;
  display.textContent = value;
  if (operand1 === null) {
    operand1 = value;
  } else if (operand2 === null && operator !== null) {
    operand2 = value;
  } else if (operand1 !== null && operand2 === null) {
    operand1 = value;
    operand2 = null;
    operator = null;
  }
}

function handleOperationButtonClick(event) {
  const value = event.target.textContent;
  display.textContent = value;

  if (operand1 !== null && operand2 === null) {
    operator = value;
  }
}

function handleEqualsButtonClick(event) {
  const value = event.target.textContent;
  console.log(operand1, operator, operand2);
  if (operand1 !== null && operand2 !== null) {
    if (operator == "/" && operand2 == 0) {
      display.textContent = "Nice try! Dividing by zero? Really?";
    } else {
      const result = operate(+operand1, operator, +operand2);
      operand1 = result;
      operator = null;
      operand2 = null;
      if (!Number.isInteger(result)) {
        display.textContent = result.toFixed(3);
      } else {
        display.textContent = result;
      }
    }
  }
  console.log(operand1, operator, operand2);
}

function handleClearButtonClick() {
  display.textContent = "0";
  operand1 = null;
  operand2 = null;
  operator = null;
}
