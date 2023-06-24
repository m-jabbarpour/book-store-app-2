import { Book, SortationMode } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DisplayedBooksState {
  value: Book[];
}

interface SetDisplayedBooksAction {
  books: Book[];
  filteredSubCategory: string;
  filteredAuthors: string[];
  filteredPublications: string[];
}

const initialState: DisplayedBooksState = {
  value: [],
};

const displayedBooksSlice = createSlice({
  name: "displayedBooks",
  initialState,
  reducers: {
    setDisplayedBooks: (
      state,
      action: PayloadAction<SetDisplayedBooksAction>
    ) => {
      const books = action.payload.books;
      const filteredSubCategory = action.payload.filteredSubCategory;
      const filteredAuthors = action.payload.filteredAuthors;
      const filteredPublications = action.payload.filteredPublications;

      const booksBySubCategory = books.filter(
        (book) => book.subCategory === filteredSubCategory
      );

      if (filteredAuthors.length === 0 && filteredPublications.length === 0) {
        state.value = booksBySubCategory;
      } else if (
        filteredAuthors.length > 0 &&
        filteredPublications.length > 0
      ) {
        state.value = booksBySubCategory.filter(
          (book) =>
            filteredAuthors.some((author) => book.authors.includes(author)) &&
            filteredPublications.includes(book.publications)
        );
      } else if (filteredAuthors.length > 0) {
        state.value = booksBySubCategory.filter((book) =>
          filteredAuthors.some((author) => book.authors.includes(author))
        );
      } else {
        state.value = booksBySubCategory.filter((book) =>
          filteredPublications.includes(book.publications)
        );
      }
    },
    sortDisplayedBooks: (state, action: PayloadAction<SortationMode>) => {
      const sortation = action.payload;

      switch (sortation) {
        case "highestRate":
          state.value.sort((a, b) => b.rate - a.rate);
          break;
        case "highestPrice":
          state.value.sort((a, b) => b.price - a.price);
          break;
        case "lowestPrice":
          state.value.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
    },
  },
});

export const { setDisplayedBooks, sortDisplayedBooks } =
  displayedBooksSlice.actions;
export default displayedBooksSlice.reducer;
