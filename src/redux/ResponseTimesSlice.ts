import { createSlice } from "@reduxjs/toolkit";

const ResponseTimelice = createSlice({
    name: 'response_times',
    initialState: {
        day: {
            labels: [] as string[],  // Changed from null to empty array
            date: [] as number[] 
        },
        week: {
            labels: [] as string[],  
            date: [] as number[]      // Changed from null to empty array
        },
    },
    reducers: {
        addDayLabels: (state, action) => {
            state.day.labels = action.payload;
        },
        addDayData: (state, action) => {
            state.day.date = action.payload;
        },
        addWeekLabels: (state, action) => {
            state.week.labels = action.payload;
        },
        addWeekData: (state, action) => {
            state.week.date = action.payload;
        }
    }
});

export default ResponseTimelice.reducer;
export const { addDayLabels, addDayData, addWeekLabels, addWeekData } = ResponseTimelice.actions;
