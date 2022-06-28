import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isShow: false,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessageText: (state, action) => {
      state.message = action.payload;
      state.isShow = true;
    },
    closeMessage: (state) => {
      state.isShow = false;
      state.message = "";
    },
  },
});
export const { setMessageText, closeMessage } = messageSlice.actions;
export default messageSlice.reducer;
