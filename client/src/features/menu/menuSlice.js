import { createSlice } from "@reduxjs/toolkit";

const initialState = { showSidebar: false, showMenu: false };

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleSidebar, toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
