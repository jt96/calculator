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
    }

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
        displayField.textContent = num.toString();
    }

    function evaluate() {
        console.log([operator, firstNum, secNum]);
        let result = operate(operator, firstNum, secNum);
        firstNum = result;
        secNum = null;
        display(result);
    }

    function clearCalculator() {
        display(0);
        firstNum = null;
        secNum = null;
        operator = null;
        nextNum = false;
    }

    let firstNum;
    let secNum;
    let operator;
    let nextNum = false;

    const numbers = document.querySelectorAll(".number");
    numbers.forEach(number => {
        number.addEventListener("click", function() {
            if (firstNum == null) {
                firstNum = number.textContent;
            } else if (firstNum != null && nextNum == false) {
                firstNum += number.textContent;
            } else if (secNum == null) {
                secNum = number.textContent;
            } else {
                secNum += number.textContent;
            }
            if (secNum == null) {
                display(firstNum);
            } else {
                display(secNum);
            }
            console.log([firstNum, secNum]);
        });
    });

    const decimal = document.querySelector(".decimal");
    decimal.addEventListener("click", function() {
        if (firstNum != null && secNum == null && !firstNum.includes(".")) {
            firstNum += ".";
        } else if (secNum != null && !secNum.includes(".")) {
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
        if (firstNum != null  && secNum != null && operator != null) {
            evaluate();
        }
        operator = addBtn.textContent;
        nextNum = true;
    });

    const subtractBtn = document.querySelector(".subtract");
    subtractBtn.addEventListener("click", function() {
        if (firstNum != null  && secNum != null && operator != null) {
            evaluate();
        }
        operator = subtractBtn.textContent;
        nextNum = true;
    });

    const multiplyBtn = document.querySelector(".multiply");
    multiplyBtn.addEventListener("click", function() {
        if (firstNum != null  && secNum != null && operator != null) {
            evaluate();
        }
        operator = "*";
        nextNum = true;
    });

    const divideBtn = document.querySelector(".divide");
    divideBtn.addEventListener("click", function() {
        if (firstNum != null  && secNum != null && operator != null) {
            evaluate();
        }
        operator = "/";
        nextNum = true;
    });

    const clear = document.querySelector(".clear");
    clear.addEventListener("click", function() {
        clearCalculator();
    });

    const equals = document.querySelector(".evaluate");
    equals.addEventListener("click", function() {
        if (operator != null && secNum != null) {
            evaluate();
            operator = null;
            nextNum = false;
        }
    })

    /*
    module.exports = {
        add,
        subtract,
        multiply,
        divide,
        power
    };
    */