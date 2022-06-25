import { ADD_TO_CARD } from "../constant";
export const addToCard = (data) => {
  console.log("Action", data);
  return async (dispatch) => {
    const apiData = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => json);
    console.log("ApiDAta", apiData);
    dispatch(setAddToCard(data,apiData));
  };
};
export const setAddToCard = (data,apiData) => {
  return {
    type: ADD_TO_CARD,
    data,
    apiData
  };
};
