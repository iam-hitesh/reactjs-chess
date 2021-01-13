import { UPDATE_COUNTER, DELETE_COUNTER, RESET_COUNTER } from "../actions/counter";


const initialState = {
    counters: [
        {
            id: 1,
            value: 0,
        },
        {
            id: 2,
            value: 0,
        },
        {
            id: 3,
            value: 0,
        },
        {
            id: 4,
            value: 0,
        }
    ]
};


/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COUNTER:
            return {
                ...state,
                counters: [
                    ...state.counters.filter((c) => {
                        if (c.id === action.id) {
                            c.value = action.value;
                        }

                        return true
                    })
                ],
            };
        case DELETE_COUNTER:
            return {
                ...state,
                counters: [
                    ...state.counters.filter(c => c.id !== action.id)
                ],
            };
        case RESET_COUNTER:
            return {
                totalCounters: 0,
                counters: [
                    ...state.counters.filter((c) => {
                        c.value = 0;

                        return true
                    })
                ]
            };
        default:
            return state;
    }
};

export default CounterReducer;