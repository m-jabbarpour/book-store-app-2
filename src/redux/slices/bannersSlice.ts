import { Banner, RequestMode } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface BannersState {
  value: Banner[];
  status: RequestMode;
}

const initialState: BannersState = {
  value: [],
  status: "idle",
};

export const fetchBanners = createAsyncThunk("fetchBanners", async () => {
  const res = await axios.get("/api/banners");
  const banners = res.data;
  return banners;
});

export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBanners.pending, (state) => {
      state.status = "pending";
    }),
      builder.addCase(fetchBanners.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "success";
      }),
      builder.addCase(fetchBanners.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default bannersSlice.reducer;
