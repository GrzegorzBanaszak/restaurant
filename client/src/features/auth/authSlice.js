import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./authService";

const token = localStorage.getItem("token");
const initialState = {
  user: null,
  token: token ? token : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getUser = createAsyncThunk("auth/get", async (token, thunkAPI) => {
  try {
    return await authServices.getUser(token);
  } catch (error) {
    const message =
      (error.respons && error.respons.data && error.respons.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    return await authServices.login(data);
  } catch (error) {
    const message =
      (error.respons && error.respons.data && error.respons.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        if (action.payload === "Token has expired") {
          state.token = null;
          localStorage.removeItem("token");
          state.user = null;
        } else {
          state.message = action.payload;
        }
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
