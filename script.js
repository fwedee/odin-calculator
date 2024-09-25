var firstNumber = "";
var operator = "";
var secondNumber = "";
var pressed = false;

function add(...numbers) {
  let sum = 0;
  for (let number of numbers) sum += number;
  return sum;
}

function subtract(...numbers) {
  let difference = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      difference = numbers[i];
    } else {
      difference -= numbers[i];
    }
  }
  return difference;
}

function multiply(...numbers) {
  let product = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      product = numbers[i];
    } else {
      product *= numbers[i];
    }
  }

  return product;
}

function divide(...numbers) {
  let quotient = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      quotient = numbers[i];
    } else {
      quotient /= numbers[i];
    }
  }
  return quotient;
}

function roundNumber(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

function operate(firstNumber, secondNumber, operator) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  let decimalMax = 8;
  switch (operator) {
    case "+":
      return roundNumber(add(firstNumber, secondNumber), decimalMax);
    case "-":
      return roundNumber(subtract(firstNumber, secondNumber), decimalMax);
    case "*":
      return roundNumber(multiply(firstNumber, secondNumber), decimalMax);
    case "/":
      return roundNumber(divide(firstNumber, secondNumber), decimalMax);

    default:
      return "Error occurred!";
  }
}

function updateResult() {
  const resultDiv = document.querySelector(".result");
  resultDiv.innerText = `Result: ${firstNumber} ${operator} ${secondNumber}`;
}

function clearVars() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function addButtonEventListeners() {
  const buttonsNumber = document.querySelectorAll(".number");
  const buttonsOperators = document.querySelectorAll(".operators");

  buttonsNumber.forEach((button) => {
    button.addEventListener("click", () => {
      if (operator === "") {
        firstNumber += button.innerText;
      } else {
        secondNumber += button.innerText;
      }
      updateResult();
    });
  });

  buttonsOperators.forEach((button) => {
    button.addEventListener("click", () => {
      if (firstNumber !== "" && secondNumber === "") {
        operator = button.innerText;
        pressed = false;
        updateResult();
      }
    });
  });

  const equalButton = document.getElementById("=");
  equalButton.addEventListener("click", () => {
    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
      let result = operate(firstNumber, secondNumber, operator);
      clearVars();
      firstNumber = result;
      updateResult();
    }
  });

  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", () => {
    clearVars();
    updateResult();
  });

  const commaButton = document.getElementById(".");
  commaButton.addEventListener("click", () => {
    if (firstNumber !== "" && operator === "" && !pressed) {
      firstNumber += commaButton.innerText;
      pressed = true;
      updateResult();
    } else if (secondNumber !== "" && !pressed) {
      secondNumber += commaButton.innerText;
      pressed = true;
      updateResult();
    }
  });
}

addButtonEventListeners();
