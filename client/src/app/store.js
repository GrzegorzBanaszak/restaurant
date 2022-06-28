import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import dishesReducer from "../features/dishes/dishesSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import makeReducer from "../features/make/makeSlice";
import orderReducer from "../features/orders/ordersSlice";
import messageReducer from "../features/message/messageSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    dishes: dishesReducer,
    auth: authReducer,
    cart: cartReducer,
    make: makeReducer,
    message: messageReducer,
    orders: orderReducer,
  },
});
