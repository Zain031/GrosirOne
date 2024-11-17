import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
    "country/fetchCountries",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all"
            );

            console.log("🚀 ~ response:", response);
            return response.data;
        } catch (e) {
            console.log(e);
            
            return rejectWithValue(e?.message || "Failed to fetch countries");
        }
    }
);

export const fetchCountryById = createAsyncThunk(
    "country/fetchCountryById",
    async (name, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${name}`
            );
            console.log("🚀 ~ response:", response);
            return response.data;
        } catch (e) {
            return rejectWithValue(
                e?.message || "Failed to fetch country by name"
            );
        }
    }
);

const CountrySlice = createSlice({
    name: "country",
    initialState: {
        countries: [],
        countryByName: {},
        status: null,
        error: null,
        loading: false,
    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.countries = action.payload || [];
                state.status = "succeeded";
                state.loading = false;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
                state.loading = false;
            })

            .addCase(fetchCountryById.pending, (state) => {
                state.loading = true;
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchCountryById.fulfilled, (state, action) => {
                state.countryByName = action.payload || null;
                state.status = "succeeded";
                state.loading = false;
            })
            .addCase(fetchCountryById.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
                state.loading = false;
            })

            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.error = action.payload;
                    state.status = "failed";
                    state.loading = false;
                }
            );
    },
});

export default CountrySlice.reducer;
