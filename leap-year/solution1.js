'use strict';

/**
 * Check if a year is a leap year or not.
 *
 * @param {number} year - The year to check.
 * @returns {boolean} - True if the year is a leap.
 */

export const leapYear = (year) => {
    if (typeof year !== 'number') {
        return 'year is not a number';
    }

    return (
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 4 === 0 && year % 400 === 0)
    );
};
