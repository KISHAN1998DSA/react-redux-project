import { ADD_TO_CART, REMOVE_TO_CART, REMOVE_CART_ITEM } from "../constant";
export const addToCart = (data) => {
  console.log("Action", data.pro);
  return {
    type: ADD_TO_CART,
    data: data.pro,
  };
};

export const deleteItem = (removeItemId) => {
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
