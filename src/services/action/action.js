import { ADD_TO_CARD } from "../constant";
export const addToCard = (data) => {
  console.log("Action", data.pro);
  return {
    type: ADD_TO_CARD,
    data:data.pro
  };  
};
