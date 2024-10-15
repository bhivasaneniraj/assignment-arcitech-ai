import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryDistributionState {
    labels: string[] | null; 
    data: number[] | null;  
}

const initialState: CategoryDistributionState = {
    labels: null,
    data: null,
};

const CategoryDistribution = createSlice({
    name: 'category_distribution',
    initialState,
    reducers: {
        addLabels: (state, action: PayloadAction<string[]>) => { // Specify payload type
            state.labels = action.payload;
        },
        addData: (state, action: PayloadAction<number[]>) => { // Specify payload type
            state.data = action.payload;
        },
    },
});

export default CategoryDistribution.reducer;
export const { addData, addLabels } = CategoryDistribution.actions;
