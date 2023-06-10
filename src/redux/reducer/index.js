import cardslice from "./CardSlice";
import product from "./productSlice";
import useSlice from "./useSlice";

const rootReducer = {
  useSlice: useSlice,
  product: product,
  cardSlice: cardslice,
};
export default rootReducer;
