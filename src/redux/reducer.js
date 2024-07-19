import { combineReducers } from "redux";
import filterReducer from "./slice/filterSlice";

const rootReducer = combineReducers({
  filter: filterReducer
})

export default rootReducer