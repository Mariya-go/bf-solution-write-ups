'use strict';

/**
 * Sum of two numbers.
 *
 * @param {number} num - The number to sum.
 *
 * @returns {number} - Sum of digits of num.
 */

export const sumOfDigits = (num) => {
    if (!Number.isInteger(num)) {
        throw new TypeError('number is not an integer');
    }
    let arrOfNum = num;

    arrOfNum = String(Math.abs(num)).split('').map(Number);

    const root = arrOfNum.reduce((sum, cur) => sum + cur, 0);

    return root >= 10 ? sumOfDigits(root) : root;
};
