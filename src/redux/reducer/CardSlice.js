import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "card",
  initialState: JSON.parse(localStorage.getItem("cart-product")) || [],
  reducers: {
    addCard: (state, action) => {
      // console.log("state ===============>", state);
      // console.log("action được truyền vào ===============>", action);
      const uselogin = JSON.parse(localStorage.getItem("user"));
      // console.log("uselogin vào ===============>", uselogin);
      const findIndex = state.findIndex(
        (cart) => +cart.userCurrent?.id == +uselogin?.id
      );

      if (findIndex == -1) {
        const newUserCart = {
          userCurrent: uselogin,
          cartProduct: [{ ...action.payload, quantity: 1 }],
        };
        state.push(newUserCart);
      } else {
        const findIndexProduct = state[findIndex].cartProduct.findIndex(
          (product) => +product.id === +action.payload.id
        );
        // console.log("findIndexProduct =========>", findIndexProduct);
        if (findIndexProduct == -1) {
          state[findIndex].cartProduct.push({
            ...action.payload,
            quantity: 1,
          });
        } else {
          state[findIndex].cartProduct[findIndexProduct].quantity += 1;
        }
      }
      localStorage.setItem("cart-product", JSON.stringify(state));
      return state;
    },
    plusproduct: (state, action) => {
      const uselogin = JSON.parse(localStorage.getItem("user"));
      const newstate = state.findIndex((item) => {
        if (item.userCurrent.id === uselogin.id) {
          return item;
        }
      });
      const data = state[newstate].cartProduct;
      data.map((card) => {
        if (card.id === action.payload.id) {
          card.quantity += 1;
        }
      });
      localStorage.setItem("cart-product", JSON.stringify(state));
      return state;
    },
    minusproduct: (state, action) => {
      const uselogin = JSON.parse(localStorage.getItem("user"));
      const newstate = state.findIndex((item) => {
        if (item.userCurrent.id === uselogin.id) {
          return item;
        }
      });
      const data = state[newstate].cartProduct;
      data.map((card) => {
        if (card.id === action.payload.id && card.quantity > 0) {
          card.quantity -= 1;
        }
      });
      localStorage.setItem("cart-product", JSON.stringify(state));
      return state;
    },
    deleteproduct: (state, action) => {
      const uselogin = JSON.parse(localStorage.getItem("user"));
      const newstate = state.findIndex((item) => {
        return item.userCurrent?.id === uselogin?.id;
      });

      console.log(action);
      const data = state[newstate].cartProduct.filter(
        (card) => +card?.id !== +action?.payload
      );
      state[newstate].cartProduct = data;

      localStorage.setItem("cart-product", JSON.stringify(state));
      return state;
    },
  },
});
const { actions, reducer } = CardSlice;
export const { addCard, plusproduct, minusproduct, deleteproduct } = actions;

export default reducer;
