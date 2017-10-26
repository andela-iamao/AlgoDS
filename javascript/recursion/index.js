/*
SUPER COMMON RECURSIVE PROBLEMS
 */


/**
 * Function for calculating the factorial of a number using recursion.
 * @param n {number}
 * @returns {number}
 */
function factorial(n) {
    return n !== 1 ? n * factorial(n - 1) : n;
}

function exponents(base, exponent) {
    var count = 0;
    var result = 1;
    while (count < exponent) {
        result *= base;
        count++;
    }
    return result;
}

/**
 * Function for finding the exponent of a number using recursion.
 * @param base {number}
 * @param exponent{number}
 * @returns {number}
 */
function recursiveExponent(base, exponent) {
    return exponent === 1 ? base * exponent : base * recursiveExponent(base, exponent - 1);
}

/**
 * Function to multiply each array value by the a specified number.
 * @param list {Array}
 * @param multiplier {Number}
 * @returns {Array}
 */
function recursiveMultiplier(list, multiplier) {
    return list.length === 1 ? list[0] * multiplier : [list.shift() * multiplier].concat(recursiveMultiplier(list, multiplier));
}

/**
 * Function to recursively reverse the order of an array.
 * @param arr {Array}
 * @returns {Array}
 */
function recursiveReverse(arr) {
    return arr.length === 1 ? arr[0] : [arr.pop()].concat(recursiveReverse(arr));
}

/**
 * Function to recursively determine the fibonacci number of nth term.
 * @param n {Number}
 * @returns {Number}
 */
function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Function to recursively flatten a nested array.
 * @param n {Array} - Nested array.
 * @returns {Array} - Flattened array.
 */
function flatten(n) {
    if (!Array.isArray(n)) {
        return [n];
    } else if (n.length < 1) {
        return [];
    }
    return flatten(n.shift()).concat(flatten(n));
}

/**
 * Function to calculate the greatest common divisor of two numbers recursively
 * @param n1 {Number}
 * @param n2 {Number}
 * @returns {Number} - Highest common divisor.
 */
function greatestCommonDivisor(n1, n2) {
    var lowest = n1 > n2 ? n2 : n1;
    if (n1 % lowest === 0 && n2 % lowest === 0) return lowest;
    return greatestCommonDivisor(n1 - 1, n2 - 1);
}

/**
 * Function to calculate the number of steps it takes to get from the top left
 * column of a multi-dimensional array to the bottom right.
 * @param x {Number} - Number of rows.
 * @param y {Number} - Number of columns.
 * @returns {Number} - Number of steps taken.
 */
function pathCount(x, y) {
    if (y === 1) return 0;
    if (x === 1) return 1 + pathCount(x, y - 1);
    return 1 + pathCount(x - 1, y);
}

/**
 * TODO: StringPermutation
 * TODO: GridSystem
 */
