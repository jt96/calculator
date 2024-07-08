const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(numArray) {
    return numArray.reduce((total, currentNum) => {
        return total + currentNum;
    }, 0);
};

const multiply = function(numArray) {
    return numArray.reduce((total, currentNum) => {
        return total * currentNum;
    }, 1);
};

const power = function(base, exponent) {
    return base ** exponent;
};

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power
};