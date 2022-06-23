import { createSlice } from "@reduxjs/toolkit";
import { defPizza } from "../../utilis/makePizzaData";

const initialState = {
  pizza: defPizza,
  pizzaFoldable: [],
  box: [],
  sandwich: [],
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
    setPizzaIngredients: (state, action) => {
      const item = state.box.find((i) => i.name === action.payload.name);
      if (item) {
        state.box.splice(state.box.indexOf(item), 1);
      } else {
        state.box.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantityBox: (state, action) => {
      const item = state.box.find((i) => i.name === action.payload);
      item.quantity += 1;
    },
    decreaseQuantityBox: (state, action) => {
      const item = state.box.find((i) => i.name === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.box.splice(state.box.indexOf(item), 1);
      }
    },
    changeDrink: (state, action) => {
      const drink = state.box.find((i) => i.name === action.payload.name);
      if (!drink && !action.payload.size) {
        state.box.push({ ...action.payload, size: "small" });
      } else if (action.payload.size && drink.size !== action.payload.size) {
        drink.size = action.payload.size;
      } else {
        state.box.splice(state.box.indexOf(drink), 1);
      }
    },
    changeAddition: (state, action) => {
      if (state.box.some((item) => item.name === action.payload.name)) {
        const item = state.box.find((i) => i.name === action.payload.name);
        state.box.splice(state.box.indexOf(item), 1);
      } else {
        if (action.payload.size) {
          state.box.push({ ...action.payload, quantity: 1 });
        } else {
          state.box.push({
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
          });
        }
      }
    },
    changeAdditionSize: (state, action) => {
      const item = state.box.find((i) => i.name === action.payload.name);
      item.size = action.payload.size;
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
  setPizzaIngredients,
  resetFoldable,
  increaseQuantityBox,
  decreaseQuantityBox,
  changeDrink,
  changeAddition,
  changeAdditionSize,
} = makeSlice.actions;
export default makeSlice.reducer;
