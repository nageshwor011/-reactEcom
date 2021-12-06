import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};
export const category = createSlice({
  name: "diffrentCategories",
  initialState,
  reducers: {
    totalDiffrentCategories: (state, action) => {
      return { ...state, categories: [...action.payload] };
    },
  },
});

export const { totalDiffrentCategories } = category.actions;

export default category.reducer;
