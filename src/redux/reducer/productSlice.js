import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductAPI from "../../api/Product";

export const handleCallAPIproduct = createAsyncThunk(
  "product/fetAllProduct",
  async () => {
    const response = await ProductAPI.getAllProduct();
    localStorage.setItem("product", JSON.stringify(response));
    return response;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: JSON.parse(localStorage.getItem("productLish")) || [],
  extraReducers: {
    [handleCallAPIproduct.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});
const { actions, reducer } = productSlice;
export default reducer;
