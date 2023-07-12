'use strict';

import { newArr } from './solution1.js';

let arr1 = [];
let arr2 = [];
let expected = [];

describe('Join Two Arrays by ID', () => {
    it(' concatenate two arrays', () => {
        (arr1 = [
            { id: 1, x: 2, y: 3 },
            { id: 2, x: 3, y: 6 },
        ]),
            (arr2 = [
                { id: 2, x: 10, y: 20 },
                { id: 3, x: 0, y: 0 },
            ]),
            (expected = [
                { id: 1, x: 2, y: 3 },
                { id: 2, x: 10, y: 20 },
                { id: 3, x: 0, y: 0 },
            ]);
        expect(newArr(arr1, arr2)).toEqual(expected);
    });
});
