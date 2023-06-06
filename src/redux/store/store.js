import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer";

const stote = configureStore({ reducer: rootReducer });
export default stote;
