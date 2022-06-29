import { GET_PRODUCT_DATA, PAGE_LOADING } from "../constant";
export const productData = () => {
  return async (dispatch) => {
    dispatch(loadingPage(true));
    const apiData = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => json);
      
    console.log("ApiProductAction", apiData);
    dispatch(getProductData(apiData));
    dispatch(loadingPage(false));
  };
};
export const getProductData = (apiData) => {
  return {
    type: GET_PRODUCT_DATA,
    apiData,
  };
};

export const loadingPage = (load) => {
  return {
    type: PAGE_LOADING,
    payload: load,
  };
};
