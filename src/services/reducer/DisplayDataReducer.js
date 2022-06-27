import { GET_PRODUCT_DATA } from "../constant";
const initialState = {
  productData:[]
};
export default function productsItems(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      console.log("ApiReducer", action);
      return {...state,  productData: action.apiData};
    default:
      return state;
  }
}
