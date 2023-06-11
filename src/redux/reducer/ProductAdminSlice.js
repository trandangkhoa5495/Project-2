import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductAPI from "../../api/Product";

export const handleCallAPIAdminproduct = createAsyncThunk(
  "product/fetAllProduct",
  async () => {
    const response = await ProductAPI.getAllProduct();
    localStorage.setItem("product", JSON.stringify(response));
    return response;
  }
);

export const handledeleteAPI = createAsyncThunk(
  "product/deleteProduct",
  async (payload) => {
    const data = JSON.parse(localStorage.getItem("product"));
    const finalData = data.filter((item) => item.id !== payload);
    await ProductAPI.deleteAPIprodcut(payload);
    return finalData;
  }
);

const ProductAdminSlice = createSlice({
  name: "productAdmin",
  initialState: JSON.parse(localStorage.getItem("product")) || [],
  reducers: {
    deleteproduct: (state, action) => {
      const newstate = state.filter((product) => product.id !== action.payload);
      localStorage.setItem("product", JSON.stringify(newstate));
      return newstate;
    },
  },
  extraReducers: {
    [handleCallAPIAdminproduct.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
    [handledeleteAPI.fulfilled]: (state, action) => {
      state = action.payload;
      localStorage.setItem("product", JSON.stringify(state));
      return state;
    },
  },
});
const { actions, reducer } = ProductAdminSlice;
export const { deleteproduct } = actions;

export default reducer;
