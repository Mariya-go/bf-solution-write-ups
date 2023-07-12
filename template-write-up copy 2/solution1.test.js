'use strict';

import { sumOfDigits } from './solution1.js';

describe('Basic Tests', () => {
    it(' 17  ->  8', () => {
        expect(sumOfDigits(17)).toEqual(8);
    });
    it('should return 0 when 0 is passed', () => {
        expect(sumOfDigits(0)).toEqual(0);
    });
    it('should return 2 when 2 is passed', () => {
        expect(sumOfDigits(2)).toEqual(2);
    });
});
