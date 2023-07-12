'use strict';

import { leapYear } from './solution1.js';

describe('Check if a year is a leap year or not.', () => {
    it(' expect 2020 to be a leap', () => {
        expect(leapYear(2020)).toEqual(true);
    });
    it('expect 2000 to be a leap', () => {
        expect(leapYear(2000)).toEqual(true);
    });
    it('expect 2001 not to be a leap', () => {
        expect(leapYear(2001)).toEqual(false);
    });
});
