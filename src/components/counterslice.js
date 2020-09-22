import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{countervalue : 0},
    reducers : {
        increment: (state) => {
            state.countervalue++
        },
        decrement : (state) => {
            state.countervalue--
        },
        form : (state, action) => {
          state.countervalue = state.countervalue + action.payload;
        }
    }
})

export const store = configureStore({
   reducer: counterSlice.reducer
   // Here the reducer of counterslice
   // is stored and whenever we called
   // the store ultimately reducer is
   // being called.
})