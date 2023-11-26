// DOM elements

const numButtons = document.querySelectorAll(".num");
const screen = document.querySelector(".screen");
const screenCurrent = document.querySelector(".screen-current");
const screenPrevious = document.querySelector(".screen-previous");
const operators = document.querySelectorAll(".op");
const equals = document.querySelector(".equals");
const ac = document.querySelector(".ac");
const negative = document.querySelector(".negative");
const c = document.querySelector(".c");
const backspace = document.querySelector(".backspace");

// global variables
let currentNum = 0;
let prevNum = 0;
let currentNumDisplay = "";
let prevNumDisplay = "";
let currentOp = "";
let prevOp = "";
let lastKeyed = "";
screenPrevious.textContent = "";

const clearAll = () => {
  currentNum = 0;
  prevNum = 0;
  currentOp = "";
  prevOp = "";
  lastKeyed = "";
  screenCurrent.textContent = currentNum;
  screenPrevious.textContent = "";
};

clearAll(); // reset calculator on load

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
    let entry = button.innerText;
    lastKeyed = "num";
    appendCurrentNumDisplay(entry);
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    currentOp = button.innerText;
    console.log(`currentNum: ${currentNum}, prevNum: ${prevNum}`);
    console.log(`currentOp: ${currentOp}, prevOp: ${prevOp}`);
    // first calculation acts differently from subsequent calculations
    if (prevOp === "") {
      prevNum = currentNum;
      updatePrevNumDisplay(currentNum, currentOp);
      currentNum = 0;
      updateCurrentNumDisplay(currentNum);
      prevOp = currentOp;
      // allows switching of operator
    } else if (lastKeyed === "op") {
      prevOp = currentOp;
      currentOp = button.innerText;
      updatePrevNumDisplay(prevNum, currentOp);
      return;
      // regular calculations after first entry
    } else {
      calculate(currentNum, prevOp, prevNum);
      updatePrevNumDisplay(prevNum, currentOp);
      updateCurrentNumDisplay(currentNum);
      prevOp = currentOp;
    }
    lastKeyed = "op";
  });
});

equals.addEventListener("click", () => {
  console.log(`currentNum: ${currentNum}, prevNum: ${prevNum}`);
  console.log(`currentOp: ${currentOp}, prevOp: ${prevOp}`);
  calculate(currentNum, prevOp, prevNum);
  currentNum = prevNum;
  prevNum = 0;
  updateCurrentNumDisplay(limitDigits(currentNum));
  lastKeyed = "equals";
  currentOp = "";
  prevOp = "";
  lastKeyed = "equals";
  screenPrevious.textContent = "";
  console.log(`currentNum: ${currentNum}, prevNum: ${prevNum}`);
  console.log(`currentOp: ${currentOp}, prevOp: ${prevOp}`);
});

backspace.addEventListener("click", () => {
  deleteOneChar();
  lastKeyed = "num";
});

ac.addEventListener("click", () => {
  screenCurrent.style.color = "#EEE";
  clearAll();
});

c.addEventListener("click", () => {
  currentNum = 0;
  updateCurrentNumDisplay(currentNum);
});

const appendCurrentNumDisplay = (num) => {
  if (parseInt(num) === 0 && currentNum === 0) {
    return;
  } else if (currentNum === 0) {
    currentNum = num;
  } else if (num === "." && currentNum.includes(".")) {
    return;
  } else if (currentNum.length < 10) {
    currentNum = currentNum + num;
  }
  updateCurrentNumDisplay(currentNum);
};

const updateCurrentNumDisplay = (num) => {
  screenCurrent.textContent = num;
};

const updatePrevNumDisplay = (num, op) => {
  screenPrevious.textContent = `${num} ${op}`;
};

const calculate = (current, op, prev) => {
  switch (op) {
    case "+":
      prevNum =
        prev === null
          ? current
          : addFunc(parseFloat(prev), parseFloat(current));
      break;
    case "-":
      prevNum =
        prev === null
          ? current
          : subtractFunc(parseFloat(prev), parseFloat(current));
      break;
    case "x":
      prevNum =
        prev === null
          ? current
          : multiplyFunc(parseFloat(prev), parseFloat(current));
      break;
    case "/":
      prevNum =
        prev === null
          ? current
          : divideFunc(parseFloat(prev), parseFloat(current));
      break;
    default:
      return;
  }
    currentNum = 0;
};

// basic math functions
const addFunc = (a, b) => a + b;
const subtractFunc = (a, b) => a - b;
const multiplyFunc = (a, b) => a * b;
const divideFunc = (a, b) => {
  if (b === 0) {
    screenCurrent.style.color = "#cd3f32";
    return NaN;
  }
  return a / b;
};

negative.addEventListener("click", () => {
  currentNum = parseFloat(currentNum) * -1;
  updateCurrentNumDisplay(currentNum);
});

const deleteOneChar = () => {
  // convert currentNum to string
  let currentNumAsString = currentNum.toString();
  // if currentNum is 0, return.
  if (currentNum === 0) {
    return;
    // if currentNum is only one character long, currentNum becomes 0.
  } else if (currentNumAsString.length === 1) {
    currentNum = 0;
  } else {
    // remove last char from currentNum
    currentNum = currentNumAsString.slice(0, -1);
  }
  updateCurrentNumDisplay(currentNum);
};

const limitDigits = (num) => {
  const roundedNum = Number(num.toFixed(11)); // Round to 11 decimal places

  if (Number.isInteger(roundedNum)) {
    return roundedNum.toString(); // Convert to string without decimal places
  } else {
    const numString = roundedNum.toString();
    let truncatedNum;

    // Check the length of the number string
    if (numString.length > 12) {
      // If the number has more than 12 digits, truncate it
      if (numString.charAt(0) === "-") {
        truncatedNum = Number(numString.slice(0, 13)); // lets negative sign be added to string as 13th char without adjusting length of number displayed
      } else {
        truncatedNum = Number(numString.slice(0, 12)); // if is not negative, 12 chars returned
      }
      return truncatedNum.toString();
    } else {
      // If the number has 12 or fewer digits, return the original number string
      return numString;
    }
  }
};

// operate function
