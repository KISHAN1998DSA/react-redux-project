import { ADD_TO_CART, REMOVE_TO_CART, REMOVE_CART_ITEM } from "../constant";
const initialState = {
  cardData: [],
};
export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const addItem = state.cardData.findIndex(
        (item) => item.id === action.data.id
      );
      console.log(addItem, "AddItem index");
      if (addItem >= 0) {
        state.cardData[addItem].qty += 1;
        return {
          ...state,
          cardData: [...state.cardData],
        };
      } else {
        console.log("Reducer", action.data);
        return {
          ...state,
          cardData: [...state.cardData, { ...action.data, qty: 1 }],
        };
      }

    case REMOVE_TO_CART:
      const data = state.cardData.filter((dt) => dt.id !== action.removeItemId);
      return { ...state, cardData: data };

    case REMOVE_CART_ITEM:
      const removeItem = state.cardData.findIndex(
        (item) => item.id === action.removeCartId
      );
      console.log(removeItem, "RemoveItem index");
      if (state.cardData[removeItem].qty > 1) {
        state.cardData[removeItem].qty -= 1;
        return {
          ...state,
          cardData: [...state.cardData],
        };
      } else if (state.cardData[removeItem].qty === 1) {
        const data = state.cardData.filter(
          (dt) => dt.id !== action.removeCartId
        );
        return { ...state, cardData: data };
      }
      break;
    default:
      return state;
  }
}
