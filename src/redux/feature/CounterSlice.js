import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const { increment, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
