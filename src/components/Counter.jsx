import React from 'react'
import { connect } from 'react-redux'
import { doIncrement, doDecrement } from '../actions/counter';
import './Counter'
import { Button } from './material/Button/Button';

const Counter = ({ value, onInc, onDec }) => (
    <div className="counter">
        <div className={"counter__value-label" + (value < 0 ? " counter__value-label--negative" : "")}>
            Value =
        <span className={"counter__value" + (value < 0 ? " counter__value--negative" : "")}>{value}</span>
        </div>
        <Button className="counter__action counter__action--increment" onClick={onInc}>+</Button>
        <Button className="counter__action counter__action--decrement" onClick={onDec}>-</Button>
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