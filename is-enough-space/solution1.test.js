'use strict';

import { isEnoughSpace } from './solution1.js';

describe('Function telling driver if he will be able to fit all the passengers, waiting at a bus stop.', () => {
    it(' 100, 50, 60  ->  10', () => {
        expect(isEnoughSpace(100, 50, 60)).toEqual(10);
    });
    it(' 100, 100, 20  ->  20', () => {
        expect(isEnoughSpace(100, 100, 20)).toEqual(20);
    });
    it(' 100, 50, 50  ->  0', () => {
        expect(isEnoughSpace(100, 50, 50)).toEqual(0);
    });
});
