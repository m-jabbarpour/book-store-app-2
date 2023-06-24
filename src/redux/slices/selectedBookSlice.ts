import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "@/types";

interface SelectedBookState {
  value: Book | null;
}

const initialState: SelectedBookState = { value: null };

const selectedBookSlice = createSlice({
  name: "selectedBook",
  initialState,
  reducers: {
    setSelectedBook: (state, action: PayloadAction<Book>) => {
      state.value = action.payload;
    },
  },
});

export default selectedBookSlice.reducer;
export const { setSelectedBook } = selectedBookSlice.actions;
