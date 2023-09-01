import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EditBookModalState {
  value: boolean;
}

const initialState: EditBookModalState = { value: false };

const editBookModalSlice = createSlice({
  name: "editBookModal",
  initialState,
  reducers: {
    showEditBookModal: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export default editBookModalSlice.reducer;
export const { showEditBookModal } = editBookModalSlice.actions;
