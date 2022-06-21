import { createSlice } from "@reduxjs/toolkit";
import { defPizza } from "../../utilis/makePizzaData";

const initialState = {
  pizza: defPizza,
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
  },
});

export const { setIngredient, setCakeType, reset } = makeSlice.actions;
export default makeSlice.reducer;
