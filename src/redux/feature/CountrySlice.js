import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all countries
export const fetchCountries = createAsyncThunk(
    "country/fetchCountries",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all "
            );

            return response.data;
        } catch (e) {
            return rejectWithValue(e || "Failed to fetch packages");
        }
    }
);
// Fetch package by ID
export const fetchCountryById = createAsyncThunk(
    "country/fetchCountryById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/protected/products/${id}`);

            return response.data;
        } catch (e) {
            return rejectWithValue(e || "Failed to fetch package by ID");
        }
    }
);

const CountrySlice = createSlice({
    name: "country",
    initialState: {
        countries: [],
        countryById: null,
        status: null,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.countries = action.payload || [];
                state.status = "succeeded";
            })

            .addCase(fetchCountryById.fulfilled, (state, action) => {
                const countryById = action.payload.data || null;
                state.countryById = countryById;
                state.status = "succeeded";
            })

            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.error = action.payload;
                    state.status = "failed";
                }
            );
    },
});

export default CountrySlice.reducer;
