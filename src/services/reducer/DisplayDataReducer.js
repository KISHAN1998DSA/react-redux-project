import { GET_PRODUCT_DATA,PAGE_LOADING } from "../constant";
const initialState = {
  productData:[],
  loadPage:true
};
export default function productsItems(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      console.log("ApiReducer", action);
      return {...state,  productData: action.apiData};

    case PAGE_LOADING:
      console.log("Page Load Reducer",action);

      return {...state,loadPage:action.payload};
    default:
      return state;
  }
}
