import React from 'react';
import {useSelector} from 'react-redux'
// import { counterSlice } from './counterslice';
 const CounterDisplay = () => {

    const counter = useSelector((state) => {
        console.log(state.countervalue)
        return state.countervalue;
  })
    return (
        <div>
  The display value from the store is = {counter}
        </div>
    )
}
export default CounterDisplay;