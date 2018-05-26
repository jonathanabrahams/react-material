import React from 'react'
import { connect } from 'react-redux'
import { doIncrement, doDecrement } from '../actions/counter';
import './Counter'

const Counter = ({ value, onInc, onDec }) => (
    <div className="counter">
        <div className="counter__value">Value: {value}</div>
        <button className="counter__action counter__action--increment" onClick={onInc}>+</button>
        <button className="counter__action counter__action--decrement" onClick={onDec}>-</button>
    </div>
)

export default connect(
    (state) => ({
        value: state.counter.value
    }),
    (dispatch) => ({
        onInc: () => { dispatch(doIncrement(1)) },
        onDec: () => { dispatch(doDecrement(1)) }
    })
)(Counter)