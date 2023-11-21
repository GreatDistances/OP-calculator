// basic math functions
const addFunc = (a, b) => a+b;
const subtractFunc= (a, b) => a-b;
const multiplyFunc = (a, b) => a*b;
const divideFunc = (a, b) => a/b;

console.log(addFunc(6,2));
console.log(subtractFunc(6,2));
console.log(multiplyFunc(6,2));
console.log(divideFunc(6,2));

// operate function
const operate = (a, b, op) => {
    return op === "+" ? addFunc(a, b) :
           op === "-" ? subtractFunc(a, b) :
           op === "*" ? multiplyFunc(a, b) :
           op === "/" ? divideFunc(a, b) :
           "error";
  };

console.log(operate(6,2,"+"));
console.log(operate(6,2,"-"));
console.log(operate(6,2,"*"));
console.log(operate(6,2,"/"));
console.log(operate(6,2,"asdf934"));

// DOM elements
const screen = document.querySelector('.screen');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const zeroZero = document.querySelector('.zeroZero');
const decimal = document.querySelector('.decimal');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiplier = document.querySelector('.multiplier');
const divider = document.querySelector('.divider');
const ac = document.querySelector('.ac');
const equals = document.querySelector('.equals');

// screen display variable
let onScreen = "0";
let numsArr = [];
screen.textContent = onScreen;

ac.addEventListener("click", () => {
    numsArr = [];
    onScreen = "0";
    screen.textContent = onScreen;
    console.log(numsArr);
});

one.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "1";
    } else {
    onScreen = onScreen + "1";
    }
    screen.textContent = onScreen;
});

two.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "2";
    } else {
        onScreen = onScreen + "2";
    }
    screen.textContent = onScreen;
});
three.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "3";
    } else {
        onScreen = onScreen + "3";
    }
    screen.textContent = onScreen;
});
four.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "4";
    } else {
        onScreen = onScreen + "4";
    }
    screen.textContent = onScreen;
});
five.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "5";
    } else {
        onScreen = onScreen + "5";
    }
    screen.textContent = onScreen;
});
six.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "6";
    } else {
        onScreen = onScreen + "6";
    }
    screen.textContent = onScreen;
});
seven.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "7";
    } else {
        onScreen = onScreen + "7";
    }
    screen.textContent = onScreen;
});
eight.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "8";
    } else {
        onScreen = onScreen + "8";
    }
    screen.textContent = onScreen;
});
nine.addEventListener("click", () => {
    if (onScreen == "0") {
        onScreen = "9";
    } else {
        onScreen = onScreen + "9";
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
});

plus.addEventListener("click", () => {
    console.log(onScreen);
    currentNum = Number(onScreen);
    numsArr.push(currentNum, "+");
    screen.textContent = String(currentNum) + "+";
    console.log(numsArr);
    onScreen = 0;
});
minus.addEventListener("click", () => {
    console.log(onScreen);
    currentNum = Number(onScreen);
    numsArr.push(currentNum, "-");
    screen.textContent = String(currentNum) + "-";
    console.log(numsArr);
    onScreen = 0;
});
multiplier.addEventListener("click", () => {
    console.log(onScreen);
    currentNum = Number(onScreen);
    numsArr.push(currentNum, "*");
    screen.textContent = String(currentNum) + "*";
    console.log(numsArr);
    onScreen = 0;
});
divider.addEventListener("click", () => {
    console.log(onScreen);
    currentNum = Number(onScreen);
    numsArr.push(currentNum, "/");
    screen.textContent = String(currentNum) + "/";
    console.log(numsArr);
    onScreen = 0;
});

equals.addEventListener("click", () => {

    // if last item in array is an operator, remove it
    const operatorsRegex = /[+\-*/]/;
    if (numsArr.length > 1 || operatorsRegex.test(numsArr[numsArr.length - 1])) {
        numsArr.pop();
        console.log(numsArr);
    }

    // TO DO loop over array, perform calculations

    screen.textContent = "EQUALS";
    });