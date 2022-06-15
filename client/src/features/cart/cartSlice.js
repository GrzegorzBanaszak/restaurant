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
      const { id, name, price, type } = action.payload;
      const dish = state.cart.find((dish) => dish.id === action.payload.id);

      if (type === "PLUS") {
        if (!dish) {
          state.cart.push({ id, name, price, quantity: 1 });
        } else {
          dish.quantity += 1;
        }
      }

      if (type === "MINUS") {
        if (dish && dish.quantity > 1) {
          dish.quantity -= 1;
        } else {
          state.cart.splice(state.cart.indexOf(dish), 1);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
