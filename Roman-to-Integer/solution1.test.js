'use strict';

import { romanToInteger } from './solution1.js';

describe('Convert roman number to integer', () => {
    it(' "III"  ->  3', () => {
        expect(romanToInteger('III')).toEqual(3);
    });
    it('should return 8 when "VIII" is passed', () => {
        expect(romanToInteger('VIII')).toEqual(8);
    });
});
