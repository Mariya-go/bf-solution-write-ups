'use strict';

/**
 * Convert roman number to integer.
 *
 * @param {string} romanNum - The roman number in string to convert.
 *
 * @returns {number} - Sum of num1 and num2.
 */

export const romanToInteger = (romanNum) => {
    const arrRoman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const arrInteger = romanNum.split('').map((symbol) => arrRoman[symbol]);

    return arrInteger.reduce(
        (sum, x, i) => (x < arrInteger[i + 1] ? sum - x : sum + x),
        0,
    );
};
