import { createSlice } from "@reduxjs/toolkit";
import { defPizza } from "../../utilis/makePizzaData";

const initialState = {
  pizza: defPizza,
  pizzaFoldable: [],
};

export const makeSlice = createSlice({
  name: "make",
  initialState,
  reducers: {
    setIngredient: (state, action) => {
      if (state.pizza.ingredients.includes(action.payload.name)) {
        state.pizza.ingredients.splice(
          state.pizza.ingredients.indexOf(action.payload.name),
          1
        );
        state.pizza.price -= action.payload.price;
      } else {
        state.pizza.ingredients.push(action.payload.name);
        state.pizza.price += action.payload.price;
      }
    },
    setCakeType: (state, action) => {
      state.pizza.cake = action.payload.name;
      state.pizza.price = action.payload.price;
    },
    reset: (state) => {
      state.pizza = defPizza;
    },
    resetFoldable: (state) => {
      state.pizzaFoldable = [];
    },
    addPizzaFoldable: (state, action) => {
      const quantity = state.pizzaFoldable.reduce((curr, next) => {
        return curr + next.quantity;
      }, 0);
      if (quantity < 8) {
        const { _id, name, price, ingredients } = action.payload;
        const newPrice = (price / 8).toFixed(2);
        state.pizzaFoldable.push({
          _id,
          name,
          price: newPrice,
          ingredients,
          quantity: 1,
        });
      }
    },
    removePizzaFoldable: (state, action) => {
      const pizza = state.pizzaFoldable.find((p) => p._id === action.payload);
      state.pizzaFoldable.splice(state.pizzaFoldable.indexOf(pizza), 1);
    },
    addPizzaFoldableQuantity: (state, action) => {
      const quantity = state.pizzaFoldable.reduce((curr, next) => {
        return curr + next.quantity;
      }, 0);
      if (quantity < 8) {
        const pizza = state.pizzaFoldable.find((p) => p._id === action.payload);
        pizza.quantity += 1;
      }
    },
    decrementPizzaFoldableQuantity: (state, action) => {
      const pizza = state.pizzaFoldable.find((p) => p._id === action.payload);
      if (pizza.quantity > 1) {
        pizza.quantity -= 1;
      } else {
        state.pizzaFoldable.splice(state.pizzaFoldable.indexOf(pizza), 1);
      }
    },
  },
});

export const {
  setIngredient,
  setCakeType,
  reset,
  addPizzaFoldable,
  removePizzaFoldable,
  addPizzaFoldableQuantity,
  decrementPizzaFoldableQuantity,
  resetFoldable,
} = makeSlice.actions;
export default makeSlice.reducer;
