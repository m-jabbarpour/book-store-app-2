import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { Book, RequestMode } from "@/types";

interface BooksState {
  value: Book[];
  status: RequestMode;
}

const initialState: BooksState = {
  value: [],
  status: "idle",
};

export const fetchBooks = createAsyncThunk<Book[], void>(
  "fetchBooks",
  async () => {
    const res = await axios.get("/api/books");
    const books: Book[] = res.data;
    return books;
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "pending";
    }),
      builder.addCase(fetchBooks.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "success";
      }),
      builder.addCase(fetchBooks.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default booksSlice.reducer;
