import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./feature/CountrySlice";
import counterSlice from "./feature/CounterSlice";

const store = configureStore({
    reducer: {
        country: countrySlice,
        counter: counterSlice,
    },
});

export default store;
