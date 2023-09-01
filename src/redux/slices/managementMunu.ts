import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Options = "books" | "orders";

interface ManagementMenuState {
  option: Options;
}

const initialState: ManagementMenuState = {
  option: "books",
};

const managementMenuSlice = createSlice({
  name: "managementMenu",
  initialState,
  reducers: {
    setManagementOption: (state, action: PayloadAction<Options>) => {
      state.option = action.payload;
    },
  },
});

export default managementMenuSlice.reducer;
export const { setManagementOption } = managementMenuSlice.actions;
