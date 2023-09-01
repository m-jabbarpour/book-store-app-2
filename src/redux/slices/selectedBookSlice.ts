import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookSummary } from "@/types";

interface SelectedBookState {
  value: BookSummary | null;
}

const initialState: SelectedBookState = { value: null };

const selectedBookSlice = createSlice({
  name: "selectedBook",
  initialState,
  reducers: {
    setSelectedBook: (state, action: PayloadAction<BookSummary>) => {
      state.value = action.payload;
    },
  },
});

export default selectedBookSlice.reducer;
export const { setSelectedBook } = selectedBookSlice.actions;
