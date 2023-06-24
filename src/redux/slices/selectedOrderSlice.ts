import { Order } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectedOrderState {
  value: Order | null;
}

const initialState: SelectedOrderState = { value: null };

const selectedOrderSlice = createSlice({
  name: "selectedOrder",
  initialState,
  reducers: {
    setSelectedOrder: (state, action: PayloadAction<Order>) => {
      state.value = action.payload;
    },
  },
});

export default selectedOrderSlice.reducer;
export const { setSelectedOrder } = selectedOrderSlice.actions;
