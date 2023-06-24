import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "@/types";

export interface SearchState {
  searchedWord: string;
  foundBooks: Book[];
}

const initialState: SearchState = { searchedWord: "", foundBooks: [] };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedWord: (state, action: PayloadAction<string>) => {
      state.searchedWord = action.payload;
    },
    setFoundBooks: (state, action: PayloadAction<Book[]>) => {
      const books = action.payload;
      state.foundBooks = books.filter((book) =>
        book.title.includes(state.searchedWord)
      );
    },
  },
});

export const { setSearchedWord, setFoundBooks } = searchSlice.actions;
export default searchSlice.reducer;
