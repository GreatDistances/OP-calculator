

// basic math functions
const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const multiply = (a, b) => a*b;

const divide = (a, b) => a/b;

console.log(add(6,2));
console.log(subtract(6,2));
console.log(multiply(6,2));
console.log(divide(6,2));

// operate function
const operate = (a, b, op) => {
    return op === "+" ? add(a, b) :
           op === "-" ? subtract(a, b) :
           op === "*" ? multiply(a, b) :
           op === "/" ? divide(a, b) :
           "error";
  };

console.log(operate(6,2,"+"));
console.log(operate(6,2,"-"));
console.log(operate(6,2,"*"));
console.log(operate(6,2,"/"));
console.log(operate(6,2,"asdf934"));
