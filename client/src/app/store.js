import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import dishesReducer from "../features/dishes/dishesSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    dishes: dishesReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
