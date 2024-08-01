import { combineReducers } from "redux";
import filterReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";
const rootReducer = combineReducers({
  filter: filterReducer,
  cart: cartReducer
})

export default rootReducer