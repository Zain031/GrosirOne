import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./feature/CountrySlice";

const store = configureStore({
    reducer: {
        country: countrySlice,
    },
});

export default store;
