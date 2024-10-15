import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the usage statistics state
interface UsageStatisticsState {
    platform: {
        labels: string[] | null; // Array of strings or null
        data: number[] | null;   // Array of numbers or null
    };
    country: {
        labels: string[] | null;  // Array of strings or null
        data: number[] | null;    // Array of numbers or null
    };
}

// Define the initial state with proper typing
const initialState: UsageStatisticsState = {
    platform: {
        labels: null,
        data: null
    },
    country: {
        labels: null,
        data: null
    }
};

const UsageStatisticsSlice = createSlice({
    name: 'usage_statistics',
    initialState,
    reducers: {
        addPlatformLabels: (state, action: PayloadAction<string[]>) => { // Specify the action payload type
            state.platform.labels = action.payload;
        },
        addPlatformData: (state, action: PayloadAction<number[]>) => { // Specify the action payload type
            state.platform.data = action.payload;
        },
        addCountryLabels: (state, action: PayloadAction<string[]>) => { // Specify the action payload type
            state.country.labels = action.payload;
        },
        addCountryData: (state, action: PayloadAction<number[]>) => { // Specify the action payload type
            state.country.data = action.payload;
        }
    },
});

export default UsageStatisticsSlice.reducer;
export const { addPlatformLabels, addPlatformData, addCountryLabels, addCountryData } = UsageStatisticsSlice.actions;
