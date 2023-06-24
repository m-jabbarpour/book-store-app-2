import { BookSummary, RequestMode } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface booksSummaryState {
  value: BookSummary[];
  status: RequestMode;
}

const initialState: booksSummaryState = {
  value: [],
  status: "idle",
};

export const fetchBooksSummary = createAsyncThunk(
  "fetchBooksSummary",
  async () => {
    const res = await axios.get("/api/management/books");
    const books = res.data;
    return books;
  }
);

export const booksSummarySlice = createSlice({
  name: "booksSummary",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookSummary>) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<BookSummary>) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
    editBook: (state, action: PayloadAction<BookSummary>) => {
      const editedBook = action.payload;

      state.value = state.value.map((book) =>
        book.id === editedBook.id ? editedBook : book
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooksSummary.pending, (state) => {
      state.status = "pending";
    }),
      builder.addCase(fetchBooksSummary.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "success";
      }),
      builder.addCase(fetchBooksSummary.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default booksSummarySlice.reducer;
export const { addBook, deleteBook, editBook } = booksSummarySlice.actions;
