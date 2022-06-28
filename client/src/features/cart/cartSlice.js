import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "./cartService";
const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  cart: cart ? cart : [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const sendOrder = createAsyncThunk(
  "cart/send",
  async (data, thunkAPI) => {
    try {
      return await cartServices.sendOrder(data);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, name, price, actionType, type, ingredients } =
        action.payload;
      const dish = state.cart.find((dish) => dish._id === action.payload._id);

      if (actionType === "PLUS") {
        if (!dish) {
          state.cart.push({ _id, name, price, ingredients, type, quantity: 1 });
        } else {
          dish.quantity += 1;
        }
      }

      if (actionType === "MINUS") {
        if (dish && dish.quantity > 1) {
          dish.quantity -= 1;
        } else {
          state.cart.splice(state.cart.indexOf(dish), 1);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {
      const dish = state.cart.find((dish) => dish._id === action.payload);
      if (dish) {
        dish.quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, action) => {
      const dish = state.cart.find((dish) => dish._id === action.payload);
      if (dish && dish.quantity > 1) {
        dish.quantity -= 1;
      } else {
        state.cart.splice(state.cart.indexOf(dish), 1);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteDish: (state, action) => {
      const dish = state.cart.find((dish) => dish._id === action.payload._id);
      state.cart.splice(state.cart.indexOf(dish), 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    resetCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = [];
        localStorage.removeItem("cart");
        state.message = action.payload;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  addToCart,
  deleteDish,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
