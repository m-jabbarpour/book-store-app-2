import { SortationMode } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SortationState {
  value: SortationMode;
}

const initialState: SortationState = {
  value: "highestRate",
};

const sortationSlice = createSlice({
  name: "sortation",
  initialState,
  reducers: {
    setSortation: (state, action: PayloadAction<SortationMode>) => {
      state.value = action.payload;
    },
  },
});

export const { setSortation } = sortationSlice.actions;
export default sortationSlice.reducer;
