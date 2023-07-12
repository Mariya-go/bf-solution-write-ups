'use strict';

/**
//  * Convert Age to Days
//  *
//  * @param {number} age - The number of years.
//  * @returns {number} - The number of years in days.
//  */

// export const convertAge = (age) => {
//     if (typeof age !== 'number') {
//         return 'age is not a number';
//     }
//     if (Number.isInteger(age)) {
//         throw new TypeError('type is not an integer');
//     }
//     const ageInDays = age * 365;

//     return ageInDays;
// };
export function calcAge(age) {
    if (!Number.isInteger(age)) {
        throw new TypeError('age is not an integer');
    }
    const daysInYear = 365;
    const convertAgeToDays = Number(age) * daysInYear;
    return convertAgeToDays;
}
