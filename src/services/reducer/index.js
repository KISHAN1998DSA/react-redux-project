import {combineReducers} from 'redux'
import cardItems from './reducer'
import productsItems from "./DisplayDataReducer"

export default combineReducers({
    cardItems,
    productsItems,
});
