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
    if (op === "+") {
        result = add(val1,val2);
    } else if (op === "-") {
        result = subtract(val1,val2);
    } else if (op === "*") {
        result = multiply(val1,val2);
    } else if (op === "/") {
        result = divide(val1,val2);
    } else {
        result = "ERROR"
    }
    return result;
}

const display = document.querySelector("#display");
const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op")

let userInput;

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function () {
    userInput = nums[i].textContent;
    display.textContent += nums[i].textContent;
    });
} 
