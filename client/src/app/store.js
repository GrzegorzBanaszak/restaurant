import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import dishesReducer from "../features/dishes/dishesSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    dishes: dishesReducer,
  },
});
