var firstNumber = "";
var operator = "";
var secondNumber = "";

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

function addButtonEventListeners() {
  const buttonsNumber = document.querySelectorAll(".number");
  const buttonsOperators = document.querySelectorAll(".operators");

  buttonsNumber.forEach((button) => {
    button.addEventListener("click", () => {
      if (firstNumber === "") {
        firstNumber = button.innerText;
      } else if (secondNumber === "") {
        secondNumber = button.innerText;
      }
      alert(button.innerText);
      updateResult();
    });
  });

  buttonsOperators.forEach((button) => {
    button.addEventListener("click", () => {
      operator = button.innerText;
      alert(button.innerText);
      updateResult();
    });
  });

  const equalButton = document.getElementById("=");
  equalButton.addEventListener("click", () => {
    let result = operate(firstNumber, secondNumber, operator);
    updateResult(result);
  });

  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    updateResult();
  });
}

addButtonEventListeners();
