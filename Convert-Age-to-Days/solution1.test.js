'use strict';

import { calcAge } from './solution1.js';

describe('Convert Age to Days', () => {
    it(' 20  ->  7300', () => {
        expect(calcAge(20)).toEqual(7300);
    });
    it('should return 0 when 0 is passed', () => {
        expect(calcAge(0)).toEqual(0);
    });
});
