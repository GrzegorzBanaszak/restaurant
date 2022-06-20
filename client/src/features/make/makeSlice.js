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
      if (state.pizza.ingredients.includes(action.payload)) {
        state.pizza.ingredients.splice(
          state.pizza.ingredients.indexOf(action.payload),
          1
        );
      } else {
        state.pizza.ingredients.push(action.payload);
      }
    },
    setCakeType: (state, action) => {
      state.pizza.cake = action.payload;
    },
  },
});

export const { setIngredient, setCakeType } = makeSlice.actions;
export default makeSlice.reducer;
