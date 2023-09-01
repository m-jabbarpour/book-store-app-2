import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilteredPublicationsState { value: string[] }

const initialState: FilteredPublicationsState = {value: []}

const filteredPublicationsSlice = createSlice({
  name: "filteredPublications",
  initialState,
  reducers: {
    addPublication: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removePublication: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (publication) => publication !== action.payload
      );
    },
  },
});

export const { addPublication, removePublication } =
  filteredPublicationsSlice.actions;
export default filteredPublicationsSlice.reducer;
