import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilteredSubCategoryState {
  value: string;
}

const initialState: FilteredSubCategoryState = {
  value: "توسعه فردی",
};

const filteredSubCategorySlice = createSlice({
  name: "filteredSubCategory",
  initialState,
  reducers: {
    setFilteredSubCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setFilteredSubCategory } = filteredSubCategorySlice.actions;
export default filteredSubCategorySlice.reducer;
