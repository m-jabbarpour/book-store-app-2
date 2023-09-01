import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IsEditBookActiveState {
  value: boolean;
}

const initialState: IsEditBookActiveState = { value: false };

const isEditBookActiveSlice = createSlice({
  name: "isEditBookActive",
  initialState,
  reducers: {
    changeIsEditBookActive: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export default isEditBookActiveSlice.reducer;
export const { changeIsEditBookActive } = isEditBookActiveSlice.actions;
