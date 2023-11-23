// DOM elements
const screen = document.querySelector(".screen");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const zeroZero = document.querySelector(".zeroZero");
const decimal = document.querySelector(".decimal");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiplier = document.querySelector(".multiplier");
const divider = document.querySelector(".divider");
const ac = document.querySelector(".ac");
const equals = document.querySelector(".equals");

// screen display variable
let onScreen = "0";
screen.textContent = onScreen;

let runningTotal;
let lastKeyed;
let lastKeyedOp;
let inProgress = false;

// basic math functions
const addFunc = (a, b) => a + b;
const subtractFunc = (a, b) => a - b;
const multiplyFunc = (a, b) => a * b;
const divideFunc = (a, b) => {
  if (b === 0) {
    ac.style.backgroundColor = "#FF0000";
    return NaN;
  }
  return a / b;
};

const limitDigits = (num) => {
  return Number(num.toPrecision(12));
}

// operate function
const operate = (a, op, b) => {
  switch (op) {
    case "+":
      return addFunc(a, b);
    case "-":
      return subtractFunc(a, b);
    case "*":
      return multiplyFunc(a, b);
    case "/":
      return divideFunc(a, b);
    default:
      return "error";
  }
};

// calculator event listeners

ac.addEventListener("click", () => {
  ac.style.backgroundColor = "#cd8c32";
  inProgress = false;
  runningTotal = 0;
  onScreen = "0";
  screen.textContent = onScreen;
  lastKeyed = "ac";
});

one.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "1";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "1";
  }
  screen.textContent = onScreen;
  lastKeyed = 1;
});

two.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "2";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "2";
  }
  screen.textContent = onScreen;
  lastKeyed = 2;
});

three.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "3";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "3";
  }
  screen.textContent = onScreen;
  lastKeyed = 3;
});
four.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "4";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "4";
  }
  screen.textContent = onScreen;
  lastKeyed = 4;
});
five.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "5";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "5";
  }
  screen.textContent = onScreen;
  lastKeyed = 5;
});
six.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "6";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "6";
  }
  screen.textContent = onScreen;
  lastKeyed = 6;
});
seven.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "7";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "7";
  }
  screen.textContent = onScreen;
  lastKeyed = 7;
});
eight.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "8";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "8";
  }
  screen.textContent = onScreen;
  lastKeyed = 8;
});
nine.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "9";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "9";
    lastKeyed = 9;
  }
  screen.textContent = onScreen;
});
zero.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "0";
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + "0";
  }
  screen.textContent = onScreen;
  lastKeyed = 0;
});
zeroZero.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "0";
  } else if (onScreen.length > 11) {
    return;
  } else {
    onScreen = onScreen + "00";
  }
  screen.textContent = onScreen;
  lastKeyed = 0o0;
});
decimal.addEventListener("click", () => {
  if (onScreen.indexOf(".") === -1) {
    onScreen = onScreen + ".";
    screen.textContent = onScreen;
  }
  lastKeyed = "decimal";
});

const operatorsRegex = /[-+*/=]/;

plus.addEventListener("click", () => {
  if (operatorsRegex.test(lastKeyed)) {
    lastKeyed = "+";
    lastKeyedOp = lastKeyed;
    return;
  } else if (inProgress == false) {
    runningTotal = Number(onScreen);
  } else {
    runningTotal = operate(runningTotal, lastKeyedOp, Number(onScreen));
  }
  screen.textContent = String(limitDigits(runningTotal));
  onScreen = "";
  inProgress = true;
  lastKeyed = "+";
  lastKeyedOp = lastKeyed;
});

minus.addEventListener("click", () => {
  if (operatorsRegex.test(lastKeyed)) {
    lastKeyed = "-";
    lastKeyedOp = lastKeyed;
    return;
  } else if (inProgress == false) {
    runningTotal = Number(onScreen);
  } else {
    runningTotal = operate(runningTotal, lastKeyedOp, Number(onScreen));
  }
  screen.textContent = String(limitDigits(runningTotal));
  onScreen = "";
  inProgress = true;
  lastKeyed = "-";
  lastKeyedOp = lastKeyed;
});

multiplier.addEventListener("click", () => {
  if (operatorsRegex.test(lastKeyed)) {
    lastKeyed = "*";
    lastKeyedOp = lastKeyed;
    return;
  } else if (inProgress == false) {
    runningTotal = Number(onScreen);
  } else {
    runningTotal = operate(runningTotal, lastKeyedOp, Number(onScreen));
  }
  screen.textContent = String(limitDigits(runningTotal));
  onScreen = "";
  inProgress = true;
  lastKeyed = "*";
  lastKeyedOp = lastKeyed;
});

divider.addEventListener("click", () => {
  if (operatorsRegex.test(lastKeyed)) {
    lastKeyed = "/";
    lastKeyedOp = lastKeyed;
    return;
  } else if (inProgress == false) {
    runningTotal = Number(onScreen);
  } else {
    runningTotal = operate(runningTotal, lastKeyedOp, Number(onScreen));
  }
  screen.textContent = String(limitDigits(runningTotal));
  onScreen = "";
  inProgress = true;
  lastKeyed = "/";
  lastKeyedOp = lastKeyed;
});

const operatorsAndEqualsRegex = /[-+*/=]/;
const numsRegex = /[0-9]+/;

equals.addEventListener("click", () => {
  // if lastKeyed is an operand, return.
  if (operatorsAndEqualsRegex.test(lastKeyed)) {
    return;
    // if lastKeyed is a number, calculate and return runningTotal on screen.
  } else if (numsRegex.test(lastKeyed)) {
    console.log(lastKeyed);
    runningTotal = operate(runningTotal, lastKeyedOp, Number(onScreen));
  }
  screen.textContent = String(limitDigits(runningTotal));
  onScreen = "";
  lastKeyed = "=";
});
