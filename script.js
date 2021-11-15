// all math operations possible
let add = function(x,y) {
    let sum = x + y;
    return sum;
}

let subtract = function(x,y) {
    let difference = x - y;
    return difference;
}

let multiply = function(x,y) {
    let product = x * y;
    return product;
}

let divide = function(x,y) {
    let quotient = x / y;
    return quotient;
}

let operate = function(val1,val2,op) {
    let result;
    if (op === "add") {
        result = add(val1,val2);
    } else if (op === "subtract") {
        result = subtract(val1,val2);
    } else if (op === "multiply") {
        result = multiply(val1,val2);
    } else if (op === "divide") {
        result = divide(val1,val2);
    } else {
        result = "ERROR"
    }
    return result;
}

// defining hooks to html elements
const display = document.querySelector("#display");
const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op")
const clearDisplay = document.querySelector("#clear");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const percentBtn = document.querySelector("#percent");
const equalsBtn = document.querySelector("#equals");
const posneg = document.querySelector("#posneg");
const percent = document.querySelector("#percent");
const decimal = document.querySelector("#decimal");

// vars for storing data and checking conditions
let userInput1 = 0;
let firstValue = false;
let userInput2 = 0;
let secondValue = false;
let userInputOp;
let existingOp = false;
let existingResult = false;
let resetDisplay = false;

// clicking numbers adds them to display and stores them for operations
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function() {
    if (resetDisplay === true) {
        display.textContent = nums[i].textContent;
        resetDisplay = false;
        existingResult = false;
    } else {
        display.textContent += nums[i].textContent;
    }
    if (firstValue === false) {
            userInput1 = parseFloat(display.textContent);
        } else if (firstValue === true) {
            userInput2 = parseFloat(display.textContent);
        }
    });
} 

// clearing display with C
clearDisplay.addEventListener("click", function() {
    display.textContent = "";
    userInput1 = 0;
    firstValue = false;
    userInput2 = 0;
    secondValue = false;
    existingOp = false;
    existingResult = false;
});

// actions taken when user inputs an operator
for (let i = 0; i < ops.length; i++) {
  ops[i].addEventListener("click", function () {
    if (existingOp === false) {
      firstValue = true;
      display.textContent = userInput1;
      userInputOp = ops[i].id;
      existingOp = true;
      resetDisplay = true;
    } else if (existingOp === true || existingResult === true) {
      let result = operate(userInput1, userInput2, userInputOp);
      firstValue = true;
      display.textContent = result;
      userInput1 = result;
      userInputOp = ops[i].id;
      existingOp = true;
      resetDisplay = true;
    }
  });
}

// perform operation on equals click
equalsBtn.addEventListener("click", function() {
    if (existingResult === false) {
        let result = operate(userInput1,userInput2,userInputOp);
        display.textContent = result;
        userInput1 = result;
        userInput2 = 0;
        secondValue = true;
        existingOp = false;
        existingResult = true;
        resetDisplay = true;
        userInputOp = null;
    }
})

// convert positive/negative
posneg.addEventListener("click", function() {
    if (firstValue === false && existingResult === false) {
        if (userInput1 > 0) {
            userInput1 = -Math.abs(userInput1);
            display.textContent = userInput1;
        } else {
            userInput1 = Math.abs(userInput1);
            display.textContent = userInput1;
        }
    } else if (firstValue === true && existingResult === false) {
        if (userInput2 > 0) {
            userInput2 = -Math.abs(userInput2);
            display.textContent = userInput2;
        } else {
            userInput2 = Math.abs(userInput2);
            display.textContent = userInput2;
        }
    } else if (firstValue === true && existingResult === true) {
        if (userInput1 > 0) {
            userInput1 = -Math.abs(userInput1);
            display.textContent = userInput1;
        } else {
            userInput1 = Math.abs(userInput1);
            display.textContent = userInput1;
        }
    }
})

// convert a number to a percent
percent.addEventListener("click", function() {
    if (firstValue === false && existingResult === false) {
        userInput1 = 0;
        display.textContent = userInput1;
    } else if (firstValue === true && existingResult === false) {
        userInput2 = userInput2* 0.01;
        display.textContent = userInput2;
    } else if (firstValue === true && existingResult === true) {
        userInput1 = userInput1 * 0.01;
        display.textContent = userInput1;
    }
})

// add decimal point to input
decimal.addEventListener("click", function() {
    if (firstValue === false && existingResult === false && display.textContent.includes(".") !== true) {
        userInput1 += ".";
        display.textContent += ".";
    } else if (firstValue === true && existingResult === false && display.textContent.includes(".") !== true) {
        userInput2 += ".";
        display.textContent += ".";
    } 
})
