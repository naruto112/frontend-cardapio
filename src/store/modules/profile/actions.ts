import { IShop } from "./types";

export function addProfileToShop(shop: IShop) {
  return {
    type: "ADD_PROFILE_TO_SHOP",
    payload: {
      shop,
    },
  };
}
