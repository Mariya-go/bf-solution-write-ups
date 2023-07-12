'use strict';

/**
 * Function telling driver if he will be able to fit all the passengers, waiting at a bus stop.
 *
 * @param {number} cap - Capacity of a bus.
 * @param {number} on - The amount of people on board.
 * @param {number} wait - The amount of people waiting to get on to the bus.
 * @returns {number} - If there is enough space, return 0, and if there isn't, return the number of passengers driver can't take.
 */

export const isEnoughSpace = (cap, on, wait) => {
    if (cap - on < wait) {
        return wait - (cap - on);
    } else {
        return 0;
    }
};
