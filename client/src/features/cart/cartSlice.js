const { createSlice } = require("@reduxjs/toolkit");

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  cart: cart ? cart : [],
};

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
});

export const {
  addToCart,
  deleteDish,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
