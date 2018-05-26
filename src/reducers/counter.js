import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT
} from '../constants/actionTypes'

const counter = (state = {
    value: 0
}, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                value: state.value + action.payload
            }
        case COUNTER_DECREMENT:
            return {
                value: state.value - action.payload
            }
        default:
            return state;
    }
}

export default counter;