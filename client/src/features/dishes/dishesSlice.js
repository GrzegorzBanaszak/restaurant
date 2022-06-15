import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dishesServices from "./dishesService";
const initialState = {
  dishes: [],
  type: "pizza",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getDishes = createAsyncThunk("dishes/get", async (_, thunkAPI) => {
  try {
    return await dishesServices.getDishes();
  } catch (error) {
    const message =
      error.response.data.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    setDishesType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDishes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDishes.fulfilled, (state, action) => {
        state.dishes = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getDishes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.dishes = null;
      });
  },
});
export const { setDishesType } = dishesSlice.actions;
export default dishesSlice.reducer;
