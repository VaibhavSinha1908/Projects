import counterReducer from "./counterReducer";
import isLoggedInReducer from "./loggedInReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: isLoggedInReducer
});

export default allReducers;
