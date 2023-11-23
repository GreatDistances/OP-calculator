let runningTotal;
let lastKeyed;
let inProgress = false;

// basic math functions
const addFunc = (a, b) => a + b;
const subtractFunc = (a, b) => a - b;
const multiplyFunc = (a, b) => a * b;
const divideFunc = (a, b) => a / b;

console.log(addFunc(6, 2));
console.log(subtractFunc(6, 2));
console.log(multiplyFunc(6, 2));
console.log(divideFunc(6, 2));

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
let numsArr = [];
screen.textContent = onScreen;

ac.addEventListener("click", () => {
  inProgress = false;
  numsArr = [];
  runningTotal = 0;
  onScreen = "0";
  screen.textContent = onScreen;
  console.log(numsArr);
  lastKeyed = "ac";
});

one.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "1";
  } else {
    onScreen = onScreen + "1";
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
});

two.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "2";
  } else {
    onScreen = onScreen + "2";
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
});
three.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "3";
  } else {
    onScreen = onScreen + "3";
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
});
four.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "4";
  } else {
    onScreen = onScreen + "4";
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
});
five.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "5";
  } else {
    onScreen = onScreen + "5";
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
});
six.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "6";
  } else {
    onScreen = onScreen + "6";
  }
  screen.textContent = onScreen;
  lastKeyed = 6;
});
seven.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "7";
  } else {
    onScreen = onScreen + "7";
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
});
eight.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "8";
  } else {
    onScreen = onScreen + "8";
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
});
nine.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "9";
  } else {
    onScreen = onScreen + "9";
    lastKeyed = "num";
  }
  screen.textContent = onScreen;
});
zero.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "0";
  } else {
    onScreen = onScreen + "0";
  }
  screen.textContent = onScreen;
  lastKeyed = "num";
});
zeroZero.addEventListener("click", () => {
  if (onScreen == "0") {
    onScreen = "0";
  } else {
    onScreen = onScreen + "00";
  }
  screen.textContent = onScreen;
});
decimal.addEventListener("click", () => {
  if (onScreen.indexOf(".") === -1) {
    onScreen = onScreen + ".";
    screen.textContent = onScreen;
  }
  lastKeyed = "decimal";
});

/*
START WITH NUMBER:
User clicks 4.
    4 displays on screen.
User clicks +.
    4 (onScreen) added to array [0]
    + added to array [1]
    runningTotal evaluates to 4.
User clicks 8
    8 (onScreen) displays on screen.
User clicks +
    8 added to array [2]
    runningTotal evaluates to 12 (4+8).
User clicks 1
    1 (onScreen) displays on screen.

START WITH ZERO
User clicks +.
    0 (onScreen) added to array [0]
    + added to array [1]
    runningTotal evaluates to 0.
User clicks 7
    7 displays on screen.
User clicks 9
    79 displays on screen.
User clicks +
    79 (onScreen) added to array [2]
    runningTotal evaluates to 79 (0 + 79).
User clicks 1
    1 (onScreen) displays on screen.





*/

plus.addEventListener("click", () => {
  if (lastKeyed == "operand") {
    return;
  }
  else if (inProgress == false) {
    runningTotal = Number(onScreen);
  } else {
    runningTotal = operate(runningTotal, "+", Number(onScreen));
  }
  screen.textContent = String(runningTotal);
  onScreen = "";
  inProgress = true;
  lastKeyed = "operand";
});

minus.addEventListener("click", () => {
  if (lastKeyed == "operand") {
    return;
  }
  else if (inProgress == false) {
    runningTotal = Number(onScreen);
  } else {
    runningTotal = subtractFunc(runningTotal, Number(onScreen));
  }
  screen.textContent = String(runningTotal);
  onScreen = "";
  inProgress = true;
  lastKeyed = "operand";
});

multiplier.addEventListener("click", () => {
  if (lastKeyed == "operand") {
    return;
  }
  else if (inProgress == false) {
    runningTotal = Number(onScreen);
  } else {
    runningTotal = multiplyFunc(runningTotal, Number(onScreen));
  }
  screen.textContent = String(runningTotal);
  onScreen = "";
  inProgress = true;
  lastKeyed = "operand";
});

divider.addEventListener("click", () => {
  if (lastKeyed == "operand") {
    return;
  } else if (inProgress == false) {
    runningTotal = Number(onScreen);
  } else {
    runningTotal = divideFunc(runningTotal, Number(onScreen));
  }
  screen.textContent = String(runningTotal);
  onScreen = "";
  inProgress = true;
  lastKeyed = "operand";
});

equals.addEventListener("click", () => {
  numsArr.push(Number(onScreen));

  // TO DO loop over array, perform calculations
  let total = Number(numsArr.shift());
  console.log(`${total}, ${numsArr}`);
  while (numsArr.length > 1) {
    const operatorsRegex = /[+\-*/]/;
    if (operatorsRegex.test(numsArr[numsArr.length - 1])) {
      numsArr.pop();
      console.log(numsArr);
    }

    if (numsArr[0] === "+") {
      total = total + numsArr[1];
    } else if (numsArr[0] === "-") {
      total -= numsArr[1];
    } else if (numsArr[0] === "*") {
      total *= numsArr[1];
    } else if (numsArr[0] === "/") {
      total /= numsArr[1];
    }
    numsArr.splice(0, 2);
  }
  onScreen = total;
  console.log(`grand total: ${total}, numsArr ${numsArr}`);
  screen.textContent = `= ${total.toFixed(8)}`;
});
