// src/redux/InsightSummary.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InsightSummarySliceState {
    labels: string[] | null;
    data: number[] | null;
}

const initialState: InsightSummarySliceState = {
    labels: null,
    data: null,
};

const InsightSummary = createSlice({
    name: 'insight_summary',
    initialState,
    reducers: {
        addLabelsInsight: (state, action: PayloadAction<string[]>) => {
            state.labels = action.payload;
        },
        addDataInsight: (state, action: PayloadAction<number[]>) => {
            state.data = action.payload;
        },
    },
});

// Ensure you export the actions correctly
export const { addLabelsInsight, addDataInsight } = InsightSummary.actions;
export default InsightSummary.reducer;
