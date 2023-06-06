import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/user";

export const register = createAsyncThunk(
  "register/fecthauthAPI",
  async (payload) => {
    const response = await UserAPI.register(payload);
    return response.user;
  }
);

export const login = createAsyncThunk("login/fecthauthAPI", async (payload) => {
  const response = await UserAPI.login(payload);
  response && localStorage.setItem("user", JSON.stringify(response.user));
  response &&
    localStorage.setItem("accesstoken", JSON.stringify(response.accessToken));
  return response.user;
});

const UseSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) || {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
    [login.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
  },
});
const { actions, reducer } = UseSlice;
export default reducer;
