import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilteredAuthorsState {
  value: string[];
}

const initialState: FilteredAuthorsState = { value: [] };

const filteredAuthorsSlice = createSlice({
  name: "filteredAuthors",
  initialState,
  reducers: {
    addAuthor: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removeAuthor: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((author) => author !== action.payload);
    },
  },
});

export const { addAuthor, removeAuthor } = filteredAuthorsSlice.actions;
export default filteredAuthorsSlice.reducer;
