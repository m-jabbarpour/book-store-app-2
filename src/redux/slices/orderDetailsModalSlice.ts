import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OrderDetailsModalState {
  value: boolean;
}

const initialState: OrderDetailsModalState = { value: false };

const orderDetailsModalSlice = createSlice({
  name: "orderDetailsModal",
  initialState,
  reducers: {
    showOrderDetailsModal: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export default orderDetailsModalSlice.reducer;
export const { showOrderDetailsModal } = orderDetailsModalSlice.actions;
