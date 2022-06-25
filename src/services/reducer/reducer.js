import { ADD_TO_CARD } from "../constant";
const initialState = {
  cardData: [],
  apiData:[]
};
export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CARD:
      console.log("Reducer", action);
      return {...state,  cardData: [...state.cardData ,action.data] ,apiData:action.apiData};
    default:
      return state;
  }
}
