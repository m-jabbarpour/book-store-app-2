import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IsDrawerActiveState {
  value: boolean;
}

const initialState: IsDrawerActiveState = { value: false };

const isDrawerActiveSlice = createSlice({
  name: "isDrawerActive",
  initialState,
  reducers: {
    changeIsDrawerActive: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export default isDrawerActiveSlice.reducer;
export const { changeIsDrawerActive } = isDrawerActiveSlice.actions;
