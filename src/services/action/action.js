import { ADD_TO_CARD, REMOVE_TO_CART, REMOVE_CART_ITEM } from "../constant";
export const addToCard = (data) => {
  console.log("Action", data.pro);
  return {
    type: ADD_TO_CARD,
    data: data.pro,
  };
};

export const delete_item = (removeItemId) => {
  console.log("Action delete", removeItemId);
  return {
    type: REMOVE_TO_CART,
    removeItemId,
  };
};

export const removeCartItem = (removeCartId) => {
  console.log("Action removeCartItem", removeCartId);
  return {
    type: REMOVE_CART_ITEM,
    removeCartId,
  };
};
