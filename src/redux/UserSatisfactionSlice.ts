import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSatisfactionState {
  labels: string[] | null; // Array of strings or null
  data: number[] | null;   // Array of numbers or null
}

const initialState: UserSatisfactionState = {
  labels: null,
  data: null,
};

const UserSatisfactionSlice = createSlice({
  name: 'user_satisfaction',
  initialState,
  reducers: {
    addUserLabels: (state, action: PayloadAction<string[]>) => {
      state.labels = action.payload;
    },
    addUserData: (state, action: PayloadAction<number[]>) => {
      state.data = action.payload;
    },
  },
});

export default UserSatisfactionSlice.reducer;
export const { addUserLabels, addUserData } = UserSatisfactionSlice.actions;
