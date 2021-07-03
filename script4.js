const numbersEl = document.querySelectorAll(".number");
const operateEl = document.querySelectorAll(".operate");
const buttonsEl = document.querySelectorAll(".btn");
const button = document.querySelector(".btn");
const clearEl = document.querySelector("#clear");
const displayaddEl = document.getElementById("displayadd");
const clearEntry = document.getElementById("clear-entry");
const sidedisplayEl = document.querySelector(".sidedisplay");

// display....
const displayEl = document.querySelector(".display");

const closeEl = document.querySelector(".close");
const helpEl = document.querySelector(".help");
const instructionEl = document.querySelector(".instructions");

// ? ------- popup window
closeEl.addEventListener("click", function () {
  instructionEl.classList.add("hidden");
  // instructionEl.style.animation = "popdown 400ms 1";
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    instructionEl.classList.add("hidden");
    // instructionEl.style.animation = "popdown 400ms 1";
  }
});
helpEl.addEventListener("click", function () {
  instructionEl.classList.toggle("hidden");
});

let operators = [];

class Calculator {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }

  add() {
    return this.value1 + this.value2;
  }

  subtract() {
    return this.value1 - this.value2;
  }

  percentile() {
    return this.value1 % this.value2;
  }

  divide() {
    return this.value1 / this.value2;
  }

  multiply() {
    return this.value1 * this.value2;
  }
  calculate(oper) {
    if (oper == "+") {
      displayaddEl.textContent = this.add();
      return this.add();
    }
    if (oper == "-") {
      displayaddEl.textContent = this.subtract();
      return this.subtract();
    }
    if (oper == "%") {
      displayaddEl.textContent = this.percentile();
      return this.percentile();
    }
    if (oper == "/") {
      displayaddEl.textContent = this.divide();
      return this.divide();
    }
    if (oper == "*") {
      displayaddEl.textContent = this.multiply();
      return this.multiply();
    }
  }
}

let totalValue;
let newCal;
let sideArray = [];

// console.log(newCal);

// ? ---------- Numbers Event

numbersEl.forEach((number) => {
  number.addEventListener("click", function () {
    // if (operators.slice(-1) == "=") displayEl.textContent = "";
    if (displayEl.textContent == totalValue) displayEl.textContent = "";
    if (displayEl.textContent.includes(".") && number.value == ".") return;
    if (displayEl.textContent.length > 15) return;

    displayEl.textContent += number.value;
    // value2 = Number(displayEl.textContent);
    // console.log(value2);
    console.log(displayEl.textContent);
  });
});

// ? ------------ Clear Events

clearEl.addEventListener("click", function () {
  displayEl.textContent = "";
  displayaddEl.textContent = "";
  operators = [];
  sidedisplayEl.textContent = "";
});

clearEntry.addEventListener("click", function () {
  displayEl.textContent = displayEl.textContent.slice(0, -1);
});

// ?---------- Operation Event

operateEl.forEach((operator) => {
  operator.addEventListener("click", function () {
    let operate = operator.textContent;

    //  Creating new class
    newCal = new Calculator(
      Number(displayaddEl.textContent),
      Number(displayEl.textContent)
    );
    //  checking the operator iin display and pushing operate to opeartions array
    if (operate != operators.slice(-1)) operators.push(operate);

    //  setting operator in the display
    sidedisplayEl.textContent = operate;
    if (operate != "=") sideArray.push(operate);

    // checking if the top display for any value
    if (!displayaddEl.textContent) {
      displayaddEl.textContent = displayEl.textContent;
      displayEl.textContent = "";
      return;
    }

    //
    if (operate == "=") {
      if (displayaddEl.textContent == "" || displayEl.textContent == "") {
        return;
      } else {
        // assigning opearte value to last value in the array
        operate = operators.slice(-2, -1);
        // console.log(operate);
        totalValue = newCal.calculate(operate);
        displayEl.textContent = totalValue;
        displayaddEl.textContent = "";
      }
    } else {
      displayEl.textContent = "";

      totalValue = newCal.calculate(sideArray.slice(-2, -1));
    }

    // console.log(operators);

    // console.log(totalValue);
  });
});
