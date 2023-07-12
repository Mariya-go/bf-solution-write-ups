'use strict';

/**
 * function that counts the integer's number of digits.
 *
 * @param {number} num - The number to count digits.
 * @returns {number} - number of digits of num.
 */

export const numberOfDigits = (num) => {
    if (!Number.isInteger(num)) {
        throw new TypeError('number is not an integer');
    }
    let count = 0;
    const numberArr = String(Math.abs(num)).split('');
    for (const item of numberArr) {
        count++;
    }
    return count;
};
