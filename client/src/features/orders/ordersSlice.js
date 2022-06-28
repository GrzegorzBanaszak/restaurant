import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./ordersService";
const initialState = {
  orders: null,
  isError: false,
  isLoading: false,
  message: "",
};

export const getOrders = createAsyncThunk(
  "orders/get",
  async (data, thunkAPI) => {
    try {
      return await orderService.getOrders(data);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isLoading = false;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default orderSlice.reducer;
