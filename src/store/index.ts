import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { ICartState } from "./modules/cart/types";
import { IShopState } from "./modules/profile/types";

import rootReducer from "./modules/rootReducer";

export interface IState {
  cart: ICartState;
  shop: IShopState;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
