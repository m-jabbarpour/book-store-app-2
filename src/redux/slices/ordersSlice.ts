import { Order, RequestMode } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface OrdersState {
  value: Order[];
  status: RequestMode;
}

const initialState: OrdersState = {
  value: [],
  status: "idle",
};

export const fetchOrders = createAsyncThunk("fetchOrders", async () => {
  const res = await axios.get("/api/management/orders");
  const orders = res.data;
  return orders;
});

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.value.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = "pending";
    }),
      builder.addCase(fetchOrders.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "success";
      }),
      builder.addCase(fetchOrders.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default ordersSlice.reducer;
// export const {  } = ordersSlice.actions;
