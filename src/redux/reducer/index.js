import product from "./productSlice";
import useSlice from "./useSlice";

const rootReducer = { useSlice: useSlice, product: product };
export default rootReducer;
