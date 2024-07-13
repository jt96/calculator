const add = function(a, b) {
    return parseFloat(a) + parseFloat(b);
};

const subtract = function(a, b) {
    return parseFloat(a) - parseFloat(b);
};

const multiply = function(a, b) {
    return parseFloat(a) * parseFloat(b);
};

const divide = function(a, b) {
    return parseFloat(a) / parseFloat(b);
};

function operate(operator, firstNum, secNum) {
    let result;
    switch (operator) {
        case "+":
            result = add(firstNum, secNum);
            break;
        case "-":
            result = subtract(firstNum, secNum);
            break;
        case "*":
            result = multiply(firstNum, secNum);
            break;
        case "/":
            if (secNum == 0) {
                alert("You have broken the calculator!");
                clearCalculator();
                result = 0;
                break;
            }
            result = divide(firstNum, secNum);
            break;
    }
    return result;
}

function display(num) {
    let displayField = document.querySelector(".display");
    let numStr = num.toString();
    if (numStr.length > 15) {
        numStr = numStr.substring(0, 15);
    }
    displayField.textContent = numStr;
}

function evaluate() {
    let result = operate(operator, firstNum, secNum);
    equalsHolder = result;
    if (result === 0) {
        firstNum = null;
    } else {
        firstNum = result;
    }
    secNum = null;
    operator = null;
    display(result);
}

function clearCalculator() {
    display(0);
    firstNum = null;
    secNum = null;
    operator = null;
    equalsHolder = null;
    nextNum = false;
}

let firstNum = null;
let secNum = null;
let operator = null;
let equalsHolder = null;
let nextNum = false;

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => { 
    number.addEventListener("click", function() {
        console.log(nextNum);
        if (operator == null && equalsHolder != null && firstNum != null) {
            firstNum = null;
            equalsHolder = null;
            nextNum = false;
        }
        if (firstNum == null) {
            firstNum = number.textContent;
        } else if (firstNum != null && nextNum == false) {
            firstNum += number.textContent;
        } else if (secNum == null) {
            secNum = number.textContent;
        } else if (secNum != null) {
            secNum += number.textContent;
        }
        if (secNum == null) { 
            display(firstNum);
        } else {
            display(secNum);
        }
        console.log([operator, firstNum, secNum, equalsHolder]);
    });
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", function() {
    if (firstNum === undefined || firstNum === null) {
        firstNum = "0."; // Initialize firstNum with "0." if it's not yet defined
    } else if (firstNum != null && secNum == null && !firstNum.toString().includes(".")) {
        firstNum += ".";
    } else if (secNum != null && !secNum.toString().includes(".")) {
        secNum += ".";
    }
    if (secNum == null) {
        display(firstNum);
    } else {
        display(secNum);
    }
});

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", function() {
    if (firstNum != null && secNum != null && operator != null) {
        evaluate();
    } else if (firstNum != null && secNum != null && operator == null) {
        firstNum = secNum;
        secNum = null;
    }
    if (equalsHolder != null && firstNum == null && secNum == null) {
        firstNum = equalsHolder;
    }
    operator = "+";
    nextNum = true;
});

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", function() {
    if (firstNum != null && secNum != null && operator != null) {
        evaluate();
    }
    if (equalsHolder != null && firstNum == null && secNum == null) {
        firstNum = equalsHolder;
    }
    operator = "-";
    nextNum = true;
});

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", function() {
    if (firstNum != null && secNum != null && operator != null) {
        evaluate();
    }
    if (equalsHolder != null && firstNum == null && secNum == null) {
        firstNum = equalsHolder;
    }
    operator = "*";
    nextNum = true;
});

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", function() {
    if (firstNum != null && secNum != null && operator != null) {
        evaluate();
    }
    if (equalsHolder != null && firstNum == null && secNum == null) {
        firstNum = equalsHolder;
    }
    operator = "/";
    nextNum = true;
});

const equals = document.querySelector(".evaluate");
equals.addEventListener("click", function() {
    if (operator != null && secNum != null) {
        evaluate();
        operator = null;
        nextNum = true;
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
    clearCalculator();
});


/*
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power
};
*/