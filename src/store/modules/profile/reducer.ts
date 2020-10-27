import produce from "immer";
import { Reducer } from "redux";

import { IShopState } from "./types";

const INITIAL_STATE: IShopState = {
  items: [],
};

const profile: Reducer<IShopState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PROFILE_TO_SHOP": {
        const { shop } = action.payload;

        draft.items.push({ phone: shop });

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default profile;
