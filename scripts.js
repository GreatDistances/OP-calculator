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
const negative = document.querySelector(".negative");

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
    ac.style.backgroundColor = "#cd3f32";
    return NaN;
  }
  return a / b;
};

const limitDigits = (num) => {
  return Number(num.toPrecision(12));
};

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

const clearRunningTotal = () => {
  runningTotal = 0;
  inProgress = false;
};

const keyedNumber = (num) => {
  if (lastKeyedOp == "=") {
    clearRunningTotal();
  }
  if (onScreen == "0") {
    onScreen = num;
  } else if (onScreen.length > 12) {
    return;
  } else {
    onScreen = onScreen + num;
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
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
  let thisNum = "1";
  keyedNumber(thisNum);
});

two.addEventListener("click", () => {
  let thisNum = "2";
  keyedNumber(thisNum);
});

three.addEventListener("click", () => {
  let thisNum = "3";
  keyedNumber(thisNum);
});

four.addEventListener("click", () => {
  let thisNum = "4";
  keyedNumber(thisNum);
});

five.addEventListener("click", () => {
  let thisNum = "5";
  keyedNumber(thisNum);
});

six.addEventListener("click", () => {
  let thisNum = "6";
  keyedNumber(thisNum);
});

seven.addEventListener("click", () => {
  let thisNum = "7";
  keyedNumber(thisNum);
});

eight.addEventListener("click", () => {
  let thisNum = "8";
  keyedNumber(thisNum);
});

nine.addEventListener("click", () => {
  let thisNum = "9";
  keyedNumber(thisNum);
});

zero.addEventListener("click", () => {
  let thisNum = "0";
  keyedNumber(thisNum);
});

zeroZero.addEventListener("click", () => {
  if (lastKeyedOp == "=") {
    clearRunningTotal();
  }
  if (onScreen == "0") {
    onScreen = "0";
  } else if (onScreen.length > 11) {
    return;
  } else {
    onScreen = onScreen + "00";
  }
  screen.textContent = onScreen;
});
decimal.addEventListener("click", () => {
  if (Number(onScreen) === 0) {
    onScreen = "0.";
    screen.textContent = onScreen;
  }
  if (onScreen.indexOf(".") === -1) {
    onScreen = onScreen + ".";
    screen.textContent = onScreen;
  }
  lastKeyed = "decimal";
});

negative.addEventListener("click", () => {
  if (Number(onScreen) !== 0) {
    onScreen = Number(onScreen) * -1;
    screen.textContent = String(limitDigits(onScreen));
  }
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
  // Calculate and return runningTotal on the screen.
  runningTotal = operate(runningTotal, lastKeyedOp, Number(onScreen));
  screen.textContent = String(limitDigits(runningTotal));
  onScreen = "";
  lastKeyedOp = "=";
  lastKeyed = lastKeyedOp;
});
