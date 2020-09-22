import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { counterSlice } from './counterslice';
function Counter() {
    // const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
          console.log(state.countervalue)
          return state.countervalue;
    })
    return (
        <div >
            value of the counter is : {counter}
            <br />
            <button onClick={(() => {
                // setCounter(counter + 1)
                dispatch(counterSlice.actions.increment())
            })}>Add</button>

            <button onClick={(() => {
                // setCounter(counter - 1)
                dispatch(counterSlice.actions.decrement())
            })}>Subtract</button>

            <input type="text" onChange={((e) => {
                setInput(e.target.value)
            })} />

            <button onClick={(() => {
                // setCounter(counter + Number(input))
                dispatch(counterSlice.actions.form(Number(input)))
            })}>Submit</button>
        </div>


    );
}

export default Counter;
