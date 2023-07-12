'use strict';

/**
 * Join Two Arrays by ID.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

export const newArr = (arr1, arr2) => {
    const merged = {};
    for (const obj of arr1.concat(arr2)) {
        const objId = obj.id;
        if (merged[objId]) {
            Object.assign(merged[objId], obj);
        } else {
            merged[objId] = { ...obj };
        }
    }

    const joinedArr = Object.values(merged);

    joinedArr.sort((a, b) => a.id - b.id);

    return joinedArr;
};
