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

  return product.toFixed(4);
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
  return quotient.toFixed(4);
}

function operate(firstNumber, secondNumber, operator) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);

    default:
      return "Error occurred!";
  }
}

function updateResult(result) {
  const resultDiv = document.querySelector(".result");
  if (typeof result !== "undefined") {
    resultDiv.innerText = `Result: ${firstNumber} ${operator} ${secondNumber} = ${result}`;
  } else {
    resultDiv.innerText = `Result: ${firstNumber} ${operator} ${secondNumber}`;
  }
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
      updateResult(result);
      clearVars();
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
