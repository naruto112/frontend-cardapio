import { combineReducers } from "redux";
import cart from "./cart/reducer";
import shop from "./profile/reducer";

export default combineReducers({
  cart,
  shop,
});
