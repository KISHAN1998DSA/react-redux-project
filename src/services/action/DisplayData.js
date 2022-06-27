import { GET_PRODUCT_DATA } from "../constant";
export const productData = () => {
  return async (dispatch) => {
    const apiData = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => json);
    console.log("ApiProductAction", apiData);
    dispatch(getProductData(apiData));
  };
};
export const getProductData = (apiData) => {
  return {
    type: GET_PRODUCT_DATA,
    apiData
  };
};
