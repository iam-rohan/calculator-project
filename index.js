let operand1 = "0";
let operand2 = "0";
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
  button.addEventListener("click" || "ke", function (event) {
    if (button.classList.contains("number")) {
      handleNumberButtonClick(event);
    } else if (button.classList.contains("operation")) {
      handleOperationButtonClick(event);
    } else if (button.id === "equals") {
      handleEqualsButtonClick(event);
    } else if (button.id === "clear") {
      handleClearButtonClick(event);
    } else if (button.id === "backspace") {
      handleBackspaceButtonClick(event);
    }
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key) || key === ".") {
    handleNumberButtonClick({ target: { textContent: key } });
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperationButtonClick({ target: { textContent: key } });
  } else if (key === "Enter" || key === "=") {
    handleEqualsButtonClick(event);
  } else if (key === "c" || key === "C") {
    handleClearButtonClick();
  } else if (key === "Backspace") {
    handleBackspaceButtonClick();
  }
});

function handleNumberButtonClick(event) {
  const value = event.target.textContent;

  if ((operand1 === "0" || operand1 !== null) && operator === null && typeof operand1 === "string") {
    //initial input for first number
    if (operand1 > 9999999999999999) {
      operand1 = "0";
    } else {
      operand1 = operand1 === "0" ? (operand1 = value) : (operand1 += value);
      display.textContent = operand1;
    }
  } else if ((operand2 !== "0" || operand2 !== null) && operator !== null) {
    //second number initial input
    if (operand2 > 9999999999999999) {
      operand2 = "0";
    } else {
      operand2 = operand2 === "0" ? (operand2 = value) : (operand2 += value);
      display.textContent = operand2;
    }
  } else if (operand1 === "-") {
    //tackles negetive number input
    operand1 = `-${value}`;
    display.textContent = operand1;
  } else if (operand1 !== "0" && operand1 !== null && operand2 === "0") {
    //continuation of calculation
    operand1 = value;
    operand2 = "0";
    operator = null;
    display.textContent = operand1;
  }

  console.log(typeof operand1, operand1, operator, operand2);
}

function handleOperationButtonClick(event) {
  const value = event.target.textContent;
  display.textContent = value;

  if (operand1 !== "0" && operand2 === "0") {
    operator = value;
  } else if (operand1 !== "0" && operator !== null && operand2 !== "0") {
    //continuation of calculation
    operand1 = operate(+operand1, operator, +operand2);
    operand2 = "0";
    operator = value;
    display.textContent = operand1;
  } else if (operand1 === "0") {
    operand1 = value;
  }
  console.log(operand1, operator, operand2);
}

function handleEqualsButtonClick(event) {
  let value = event.target.textContent;
  console.log(+operand1, operator, +operand2);
  if (operand1 !== null && operand2 !== null) {
    if (operator == "/" && operand2 == 0) {
      display.textContent = "Infinity it is!";
    } else {
      const result = operate(+operand1, operator, +operand2);
      operand1 = result;
      operator = null;
      operand2 = "0";
      if (result > 1e17) {
        display.textContent = "Sorry Overflow!";
      } else {
        if (!Number.isInteger(result)) {
          display.textContent = result.toFixed(2);
        } else {
          display.textContent = result;
        }
      }
    }
  }
  console.log(typeof operand1, operand1, operator, operand2);
}

function handleClearButtonClick() {
  display.textContent = "0";
  operand1 = "0";
  operand2 = "0";
  operator = null;
}

function handleBackspaceButtonClick() {
  if (operand1.length > 1) {
    operand1 = operand1.slice(0, -1);
  } else {
    operand1 = "0";
  }
  display.textContent = operand1;
  console.log(typeof operand1, operand1, operator, operand2);
}
