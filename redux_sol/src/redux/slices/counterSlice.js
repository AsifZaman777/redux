import {createSlice} from '@reduxjs/toolkit';

//create slice for the counter
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1}
    }
});

//export the actions
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;

