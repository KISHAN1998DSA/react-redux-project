import { ADD_TO_CARD } from "../constant"
export const addToCard = (data) =>{
    return {
        type:ADD_TO_CARD,
        data:data
    }
}