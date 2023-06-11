import cardslice from "./CardSlice";
import productadmin from "./ProductAdminSlice";
import userAdminslice from "./UserAdminSlice";
import product from "./productSlice";
import useSlice from "./useSlice";

const rootReducer = {
  useSlice: useSlice,
  product: product,
  cardSlice: cardslice,
  productadminslice: productadmin,
  userAdminSlice: userAdminslice,
};
export default rootReducer;
