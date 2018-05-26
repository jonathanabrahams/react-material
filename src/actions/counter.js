import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT
} from "../constants/actionTypes";

export const doIncrement = (value = 1) => ({
    type: COUNTER_INCREMENT,
    payload: value
});

export const doDecrement = (value = 1) => ({
    type: COUNTER_DECREMENT,
    payload: value
})