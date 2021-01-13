export const UPDATE_COUNTER = 'UPDATE_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';


/**
 * @param id
 * @param value
 * @return {Object}
 */
export function updateCounter(id, value) {
    return {
        type: UPDATE_COUNTER,
        id: id,
        value: value
    };
}


/**
 * @param id
 * @return {Object}
 */
export function deleteCounter(id) {
    return {
        type: DELETE_COUNTER,
        id: id
    }
}


/**
 * @return {Object}
 */
export function resetCounters() {
    return {
        type: RESET_COUNTER
    }
}